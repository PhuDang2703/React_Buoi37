import { DELETE_USER, EDIT_USER, KEYWORD, SUBMIT } from "./constants";

const initialState = {
  userList: [
    {
      id: 1,
      maSV: 1,
      fullname: "Đặng Văn Quang Phú",
      phoneNumber: "0865607423",
      email: "dangvanquangphu2703@gmail.com",
    },
    {
      id: 2,
      maSV: 2,
      fullname: "Trần Thị Thu Thoa",
      phoneNumber: "0866995756",
      email: "ThoaTran@gmail.com",
    },
  ],
  keyword: "",
  userEdit: null,
};

//Gán state = initialState
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      //clone userList từ state
      let userList = [...state.userList];

      //tìm vị trí
      const index = userList.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        //Xoá phần tử tại vị trí tìm thấy
        userList.splice(index, 1);
      }

      //Cap nhat lai state
      state.userList = userList;

      return { ...state };
    }

    case SUBMIT: {
      let userList = [...state.userList];
      if (action.payload.id) {
        //update
        const index = userList.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          userList[index] = action.payload;
        }
      } else {
        //add
        const userNew = { ...action.payload, id: new Date().getTime() };
        userList.push(userNew);
      }
      //Cập nhật lại state
      state.userList = userList;

      return { ...state };
    }

    case EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    case KEYWORD: {
      state.keyword = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
