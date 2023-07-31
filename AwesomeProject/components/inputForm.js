import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState('')
  // const dispatch = useDispatch()

  const handleSubmit = () => {
    if (currentValue !== '') {
      // dispatch(addTodo(currentValue))
      setCurrentValue('')
    }
  }

  /*** react-native 컴포넌트
   * 📌 KeyboardAvoidingView : see https://reactnative.dev/docs/keyboardavoidingview
   * 가상 키보드에서 벗어나야 하는 뷰의 일반적인 문제를 해결하기 위한 요소
   * 키보드 높이에 따라 높이, 위치 또는 아래쪽 패딩을 자동으로 조정
   *
   * 📌 Pressable : see https://reactnative.dev/docs/pressable
   * 정의된 자식에 대한 다양한 프레스(누를 수 있는) 상호작용 단계를 감지할 수 있는 핵심 구성 요소 래퍼
   *
   */

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        value={currentValue}
        onChangeText={setCurrentValue}
        // onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa',
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: 'white',
    fontSize: 25,
  },
})
