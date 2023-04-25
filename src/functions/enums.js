const notiType = {
    "N": "공지",
    "E": "이벤트"
}

const exerciseModeCode = {
    "01": "라이브",
    "02": "재방송", 
    "03": "VOD",
    "04": "라이트모드"
}

const classWorkoutCategoryCode = {
    "01": "스피닝", 
    "02": "머슬온",
    "03": "스피닝+머슬온"
}

const classLevelCode = {
    "S": "입문",
    "L": "초급",
    "M": "중급",
    "H": "상급"
}

const iconCode = {
    "01": "배지",
    "02": "머슬핀",
    "03": "미션"
}

const exeType = {
    "M": "머슬 포인트", 
    "K": "케이던스", 
    "C": "소모 칼로리", 
    "T": "운동 시간", 
    "D": "운동 거리"
}

const exeTypeUnit = {
    "M": "점",
    "K": "rpm",
    "C": "kcal",
    "T": "",
    "D": "km"
}

const term = {
    "D": "일간", 
    "W": "주간", 
    "M": "월간"
}

const termType = {
    "D": "일별",
    "W": "주별",
    "M": "월별"
}

const iconCodeTitle = {
    "01": "배지 획득",
    "02": "머슬핀 달성",
    "03": "미션 성공"
}

const contentTypeData = {
    "LL": {"iconData": require("@/assets/icons/icon-live.png"), "altData": "라이브 아이콘"},
    "RV": {"iconData": require("@/assets/icons/icon-rerun.png"), "altData": "재방송 아이콘"},
    "VV": {"iconData": require("@/assets/icons/icon-vod.svg"), "altData": "VOD 아이콘"},
    "LM": {"iconData": require("@/assets/icons/icon-light-mode.svg"), "altData": "라이트 모드 아이콘"}
}

const contentTypeDataWithCode = {
    "01": {"iconData": require("@/assets/icons/icon-live.png"), "altData": "라이브 아이콘"},
    "02": {"iconData": require("@/assets/icons/icon-rerun.png"), "altData": "재방송 아이콘"},
    "03": {"iconData": require("@/assets/icons/icon-vod.svg"), "altData": "VOD 아이콘"},
    "04": {"iconData": require("@/assets/icons/icon-light-mode.svg"), "altData": "라이트 모드 아이콘"}
}

export default function getEnumData(enumType, value) {
    const allEnums = {
        "notiType": notiType, 
        "exerciseModeCode": exerciseModeCode,
        "classWorkoutCategoryCode": classWorkoutCategoryCode,
        "classLevelCode": classLevelCode,
        "iconCode": iconCode,
        "iconCodeTitle": iconCodeTitle,
        "exeType": exeType,
        "exeTypeUnit": exeTypeUnit,
        "term": term,
        "termType": termType,
        "contentTypeData": contentTypeData,
        "contentTypeDataWithCode": contentTypeDataWithCode
    }
    if (allEnums[enumType][value]){
        return allEnums[enumType][value]
    } else {
        return ""
    }
}

