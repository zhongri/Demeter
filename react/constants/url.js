const URL_DOMAIN = 'http://localhost:3000/';
const URL_VERSION = 'api/v1/';

const URL_MODULE = {
    USER: 'user/',
    PROJECT: 'project/'
};

// 登录
export const URL_LOGIN = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'login';
// 修改密码
export const URL_MODIFY_PWD = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'modifyPassword';
// 根据uid获取用户信息
export const URL_GET_USER_INFO = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'getUserInfo';
// 根据uid更新用户信息
export const URL_UPDATE_USER_INFO = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'updateGeneralInfo';
// 创建用户
export const URL_CREATE_USER = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'createUser';
// 重置密码
export const URL_RESET_PASSWORD = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'resetPassword';
// 获取用户列表
export const URL_FETCH_USER_LIST = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'fetchUserList';
// 删除用户
export const URL_DELETE_USER = URL_DOMAIN + URL_VERSION + URL_MODULE.USER + 'deleteUser';

// 创建项目
export const URL_CREATE_PROJECT = URL_DOMAIN + URL_VERSION + URL_MODULE.PROJECT + 'createProject';
// 获取用户列表
export const URL_FETCH_PROJECT_LIST = URL_DOMAIN + URL_VERSION + URL_MODULE.PROJECT + 'fetchProjectList';
// 更新项目信息
export const URL_UPDATE_PROJECT_INFO = URL_DOMAIN + URL_VERSION + URL_MODULE.PROJECT + 'updateProjectInfo';
// 删除项目
export const URL_DELETE_PROJECT = URL_DOMAIN + URL_VERSION + URL_MODULE.PROJECT + 'deleteProject';