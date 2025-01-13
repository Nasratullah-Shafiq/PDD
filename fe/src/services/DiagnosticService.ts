import { AxiosResponse } from "axios";
import instance from "../api/axios";


const DiagnosticService = {
    diagnostic: async (data: FormData): Promise<AxiosResponse<any>> => {
        try{
            const response = await instance.post(
                "diagnostics/",
                data,
                {
                    headers: {
                        'Content-Type': 'mltipart/form-data'
                    }
                }
            )
            console.log(response)
            return response
        }catch(err){
            throw err
        }
    }
}

export default DiagnosticService