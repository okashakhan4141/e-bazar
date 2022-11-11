// import axios, { AxiosResponse } from "axios";
// import { billEnquiry_req, billEnquiry_res, billPayment_req, billPayment_res } from "../interfaces/wso2";

// const instance = axios.create({
//     baseURL: process.env.ESB_BASE_URL!,
// });

// const responseBody = (response: AxiosResponse) => response.data;

// const requests = {
//     post: (url: string, body: {}) => {
//         console.log('ESB URL -> ', process.env.ESB_BASE_URL + url);
//         return instance.post(url, body).then(responseBody)
//     }
// }

// export const WSO2 = {
//     billEnquiry: (args: billEnquiry_req): Promise<billEnquiry_res> => requests.post('/bill/inquiry', args),
//     billPayment: (args: billPayment_req): Promise<billPayment_res> => requests.post('/api/billpayment', args)
// } 