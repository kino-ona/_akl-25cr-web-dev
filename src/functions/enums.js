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
    "02": "EMS",
    "03": "스피닝+EMS"
}

const classLevelCode = {
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

const term = {
    "D": "일간", 
    "W": "주간", 
    "M": "월간"
}

const iconCodeTitle = {
    "01": "배지 획득",
    "02": "머슬핀 달성",
    "03": "미션 성공"
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
        "term": term
    }
    if (allEnums[enumType][value]){
        return allEnums[enumType][value]
    } else {
        return ""
    }
}

