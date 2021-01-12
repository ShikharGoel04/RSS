import { baseUrl } from '../shared/baseUrl';
export const sendOTP = (phone) => (dispatch) => {
    console.log("send");
   const otp = {
        username:phone,
        phone: phone
    };

    var formData = new FormData();
for (var k in otp) {
    formData.append(k, otp[k]);
}
var request = {
    method: 'POST',
    body: formData,
};
console.log("shikhar");
return fetch(baseUrl + 'profile/register', request)
.then(response => response.json())
    .then(response => dispatch(addOTP(response)));
  }

  export const addOTP = (response) => ({
    type: ActionTypes.ADD_OTP,
    payload: response
});