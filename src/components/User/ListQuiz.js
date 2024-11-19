import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiServices";
import './ListQuiz.scss';
import { Navigate, useNavigate } from "react-router-dom";
const ListQuiz = (props) => {
    // state
    const [arrQuiz, setArrQuiz] = useState([]);

    // effect
    useEffect(() => {
        getQuizData();
    }, []);

    // navigate
    const navigate = useNavigate();

    // function con
    const getQuizData = async () => {
        let response = await getQuizByUser();
        if (response && response.EC === 0) {
            setArrQuiz(response.DT);
        }
    };

    const handleDetailQuiz = (id) => {
        navigate(`/quiz/${id}`);
    };
    const renderQuizData = () => {
        if (arrQuiz && arrQuiz.length > 0) {
            return arrQuiz.map((value, key) => {
                return (
                    <div className="card" style={{ width: "18rem" }} key={value.id}>
                        <img src={`data:image/jpeg;base64,${value.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quiz {value.id}</h5>
                            <p className="card-text">{value.description}</p>
                            <button className="btn btn-primary" onClick={() => { handleDetailQuiz(value.id) }}>Start now</button>
                        </div>
                    </div>
                );
            });
        }
    };
    return (
        <div className="list-quiz-container container">
            {renderQuizData()}
        </div>
    );
};

export default ListQuiz;