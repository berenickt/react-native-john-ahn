import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

/** React-Native 기본 컴포넌트
 * View         : 웹개발로 치면 div 태그
 * Text         : 웹개발로 치면 p 태그
 * SafeAreaView : 장치의 안저 영역 경계 내 콘텐츠를 렌더링
 * StatusBar    : 컴포넌트 앱의 상태 표시줄을 제어하는 구성요소
 *                상태표시줄은 휴대폰 상단 영역의 시간, 네트워크정보, 배터리잔량 등의 아이콘을 표시
 */
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>ToDo App</Text>
        {/* <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
          <Text style={styles.logOutText}>-</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // ** android, ios 분기처리 => ios는 이미 safeAreaView 컴포넌트로 처리함
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#f7f8fa',
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: '600',
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  listView: {
    // ** see https://reactnative.dev/docs/flexbox#flex
    // 웹 개발의 flex와 유사
    // 각 요소의 flex 속성에 따라 공간이 분리됨
    // flex 요소가 각각 1, 2, 3 이라면, 다 더하면 6이니,
    // flex: 1 준 요소는 6/1이 된다.
    // flexDirection: row는 행을 기준으로 바뀜
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '500',
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logOutText: {
    color: 'white',
    fontSize: 25,
  },
  logOutButton: {
    marginBottom: 25,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 4,
  },
})
