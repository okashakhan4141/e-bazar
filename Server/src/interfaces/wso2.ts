
export interface billEnquiry_res {
    transactionId: string;
    responseDec: string;
    responseCode?: string;
    customizedResult?: any;
    errorCode?: string;
}

export interface billEnquiry_req {
    transactionId: string;
    customerMsisdn: number;
    spId: number | string;
    spPin: string;
    thirdpartyId: string;
    thirdpartyPassword: string;
    billReferenceNumber: string;
    organizationShortCode: number;
}

export interface billPayment_res {
    transactionId?: string;
    serviceStatus?: string | number;
    responseDec?: string;
    error?: any
}

export interface billPayment_req {
    transactionId: string;
    thirdpartyId: string;
    thirdpartyPassword: string;
    primaryMsisdn: number;
    primaryPin: string;
    shortCode: number;
    billReferenceNumber: string;
    amount: number;
    currency: string
}

