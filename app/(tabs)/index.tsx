import { Platform, SafeAreaView, StyleSheet, ScrollView, RefreshControl } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import Lottie from 'lottie-react-native'
import { useRef, useContext } from 'react'
import { ThreadsContext } from '../../context/thread-context'
import ThreadsItem from '../../components/ThreadsItem'

export default function TabOneScreen() {
	const animationRef = useRef<Lottie>(null)
	const threads = useContext(ThreadsContext)

	return (
		<SafeAreaView>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: Platform.select({ android: 30 }),
				}}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							animationRef.current?.play()
						}}
						tintColor={'transparent'}
					/>
				}>
				<Lottie
					ref={animationRef}
					source={require('../../lottie-animations/threads.json')}
					loop={false}
					autoPlay
					style={{
						width: 90,
						height: 90,
						alignSelf: 'center',
					}}
				/>
				{threads.map((thread) => (
					<ThreadsItem key={thread.id} {...thread} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

// const styles = StyleSheet.create({})r
