// archive manager
import {
    ACTION_ARCHIVE_DELETE_ARCHIVE_FULFILLED,
    ACTION_ARCHIVE_FETCH_ALL_PROJECTS_FULFILLED,
    ACTION_ARCHIVE_FETCH_ARCHIVES_FULFILLED,
    ACTION_ARCHIVE_SELECT_PLATFORM,
    ACTION_ARCHIVE_SELECT_PROJECT
} from "../constants/ActionType";
import {RES_SUCCEED} from "../../api/status/Status";
import {message} from "antd";
import {bytesToSize} from "../../util/CalculateUtil";

/**
 * 获取可访问项目列表 reducer
 * @param state
 * @param action
 */
const fetchAllProjectsReducer = (state, action) => {
    const succeed = action.status === RES_SUCCEED;
    if (!succeed) {
        message.error(action.msg);
        return {
            ...state,
            projectList: [],
        };
    }

    const projectList = action.data.projectList.map((item, index) => ({
        key: index,
        value: String(item.id),
        name: item.projectName
    }));

    return {
        ...state,
        projectList: projectList,
    };
};

/**
 * 获取文档列表 reducer
 * @param state
 * @param action
 */
const fetchAllArchivesReducer = (state, action) => {
    const succeed = action.status === RES_SUCCEED;
    if (!succeed) {
        message.error(action.msg);
        return {
            ...state,
            archiveList: [],
            pageLoading: false,
        };
    }

    const archiveList = action.data.archiveList.map(function (item, index) {
        return {
            key: index,
            project: {
                projectId: item.projectId,
                projectName: item.projectName,
                projectLogo: item.avatar,
            },
            archiveId: item.id,
            platform: item.platformId,
            archiveName: item.archiveName,
            archiveDes: item.des,
            archiveSize: bytesToSize(item.archiveSize),
            archiveCreatedAt: item.createdAt,
        };
    });

    return {
        ...state,
        archiveList: archiveList,
        archiveCount: action.data.archiveCount,
        pageNum: action.data.pageNum,
        pageLoading: false,
    };
};

/**
 * 删除文档, 成功的话则刷新table数据
 * @param state
 * @param action
 * @returns {*}
 */
function deleteArchiveReducer(state, action) {
    const succeed = action.status === RES_SUCCEED;
    if (!succeed) {
        message.error(action.msg);
        return {
            ...state
        };
    }
    return {
        ...state,
        needRefreshData: true
    };
}

const initialArchive = {
    selectedProject: null, // 已选择的项目
    selectedPlatform: null, // 已选择的平台
    projectList: [], // 项目列表
    platformList: [{
        value: '1',
        name: 'Android'
    }, {
        value: '2',
        name: 'IOS'
    }], // 平台列表
    archiveCount: 0, // 文档数量
    archiveList: [], // 文档列表
    pageNum: 1, // 当前页码
    pageSize: 10, // 页面容量
    pageLoading: false, // 文档table刷新
    needRefreshData: false, // 是否需要刷新数据
};

/**
 * dashboard reducer模块分发
 * @param state
 * @param action
 * @returns {*}
 */
export function archive(state = initialArchive, action) {
    let newState = state;
    switch (action.type) {
        case ACTION_ARCHIVE_SELECT_PROJECT:
            newState = {
                ...state,
                selectedProject: action.data.selectedProject
            };
            break;
        case ACTION_ARCHIVE_SELECT_PLATFORM:
            newState = {
                ...state,
                selectedPlatform: action.data.selectedPlatform
            };
            break;
        case ACTION_ARCHIVE_FETCH_ALL_PROJECTS_FULFILLED:
            newState = fetchAllProjectsReducer(state, action.data);
            break;
        case ACTION_ARCHIVE_FETCH_ARCHIVES_FULFILLED:
            newState = fetchAllArchivesReducer(state, action.data);
            break;
        case ACTION_ARCHIVE_DELETE_ARCHIVE_FULFILLED:
            newState = deleteArchiveReducer(state, action.data);
            break;
        default:
    }
    return newState;
}