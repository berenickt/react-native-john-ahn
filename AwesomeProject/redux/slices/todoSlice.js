import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  // 초기 state 값
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    // todo 추가
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: 'todo',
      })
    },
    // todo 수정
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload)
      state.todos[item].state = state.todos[item].state === 'todo' ? 'done' : 'todo'
      state.todos.push(state.todos.splice(item, 1)[0])
    },
    // todo 삭제
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload)
      if (item > -1) {
        state.todos.splice(item, 1)
      }
    },
  },
})

export default todoSlice.reducer
// 다른 컴포넌트에서 액션을 사용할 수 있게 export
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions
