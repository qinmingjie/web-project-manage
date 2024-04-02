export function verifyUserName(rules, value, callback) {
  const regxUserName = /^[a-zA-Z0-9\u4e00-\u9fa5]{4,16}$/.test(value)
  if (!value) {
    callback(new Error('用户名为必填项!'))
  } else if (!regxUserName) {
    callback(new Error('用户名为数字,字母或中文不能包含特殊符号且长度在8-16'))
  } else {
    callback()
  }
}

export function verifyPassWord(rules, value, callback) {
  const regxPassword = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/.test(value)
  if (!value) {
    callback(new Error('密码为必填项!'))
  } else if (!regxPassword) {
    callback(new Error('密码至少包含一个字母,数字,特殊符号(!@#$%^&*),且长度在8-16'))
  } else {
    callback()
  }
}

export function setToken(name, value) {
  localStorage.setItem(name, value)
}

export function getToken(name) {
  return localStorage.getItem(name)
}

export function removeToken(name) {
  localStorage.removeItem(name)
}

export function clearToken() {
  localStorage.clear()
}

export function isAuth() {
  if (getToken('token')) {
    return true
  }
  return false
}
