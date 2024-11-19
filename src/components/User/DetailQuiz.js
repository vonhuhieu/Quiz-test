import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailQuiz } from "../../services/apiServices";
import { toast } from "react-toastify";

const DetailQuiz = (props) => {
    // hook param
    const params = useParams();

    // hook state
    const [detailQuiz, setDetailQuiz] = useState([]);

    // hook effect
    useEffect(() => {
        console.log("effect");
        fetchDetailQuiz();
    }, [params.id]);

    // function
    const fetchDetailQuiz = async () => {
        let response = await getDetailQuiz(params.id);
        if (response && response.EC === 0) {
            setDetailQuiz(response.DT);
        }
        else if (response && response.EC !== 0) {
            toast.error(response.EM);
        }
        else {
            toast.error("No response from server");
        }
    };

    const renderDetailQuiz = () => {
        if (detailQuiz && detailQuiz.length > 0) {
            return detailQuiz.map((value, key) => {
                return (
                    <div className="card" style={{ width: "18rem" }} key={value.id}>
                        <img src={`data:image/jpeg;base64,${value.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quiz {value.id}</h5>
                            <p className="card-text">{value.description}</p>
                        </div>
                    </div>
                );
            });
        }
    };
    console.log("render");
    return (
        <>
            {renderDetailQuiz()}
        </>
    );
};

export default DetailQuiz;