import { useState } from "react";

export default function Login(){
    const history = useHistory();
    const [isValid, setIsValid] = useState(true);

    const [formData, setFormData] = useState(
        {
            enail: "",
            password: "",
            term: false
        }
    )

    return(
        <>

        </>
    )
}