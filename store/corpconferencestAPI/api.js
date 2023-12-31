import axios from "axios"
const corpconferencestAPI = axios.create({
  baseURL: "https://corp-conferences-t--45220.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return corpconferencestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return corpconferencestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return corpconferencestAPI.post(`/api/v1/signup/`, payload)
}
function modules_flag_user_content_choice_list_retrieve(payload) {
  return corpconferencestAPI.get(`/modules/flag-user-content/choice-list/`)
}
function modules_flag_user_content_create_report_create(payload) {
  return corpconferencestAPI.post(`/modules/flag-user-content/create-report/`)
}
function modules_flag_user_content_reported_list_retrieve(payload) {
  return corpconferencestAPI.get(`/modules/flag-user-content/reported-list/`)
}
function rest_auth_login_create(payload) {
  return corpconferencestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return corpconferencestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return corpconferencestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return corpconferencestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return corpconferencestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return corpconferencestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return corpconferencestAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return corpconferencestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return corpconferencestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return corpconferencestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return corpconferencestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_flag_user_content_choice_list_retrieve,
  modules_flag_user_content_create_report_create,
  modules_flag_user_content_reported_list_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
