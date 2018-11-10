export function checkReq(respone: any) {
    return respone.code === 200;
}

export function checkMsg(respone: any) {
    return respone.msg === 'success';
}

export function checkForm(form: any) {
    return form.status === 'VALID';
}
