import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = () => {
  /*** Pressable의 hitSlop
   * 래핑된 요소에서 터치가 등록될 수 있는 거리를 정의하는 선택적 HitRect
   * PressRect를 사용하면 활성화를 유지하고 "누르기"를 받을 자격이 있는 동안 요소와 해당
   * HitRect 너머로 프레스가 이동할 수 있습니다.
   *
   * 구성요소
   * - Button
   * - HitRect
   * - PressRect
   * - HitSlop = Button + HitRect
   * - pressRetentionOffset = Button + HitRect + PressRect
   */

  return (
    <View style={styles.itemContainer}>
      <Pressable
        hitSlop={10}
        style={styles.itemCheckbox}
        onPress={() => dispatch(updateTodo(props.id))}
      >
        {/* {props.state === 'todo' ? (
          <CheckboxUnchecked />
        ) : (
          <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
        )} */}
      </Pressable>
      {/* <Text style={[styles.itemText, props.state === 'done' ? styles.itemTextChecked : '']}>
        {props.text}
      </Text> */}
      {/* <Pressable
        style={[styles.deleteButton, props.state === 'done' ? styles.deleteButtonDone : '']}
        hitSlop={10}
        onPress={() => dispatch(deleteTodo(props.id))}
      >
        <DeleteIcon />
      </Pressable> */}
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f7f8fa',
  },
  itemCheckbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
})
