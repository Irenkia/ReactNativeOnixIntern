import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from './styles';
import { SECTION_LIST_CARS } from '../../constants/constants';

const Settings = () => {
    return (

        <View style={styles.container}>
            <View style={{ marginVertical: 20 }}>
                <Text style={styles.title}>My SectionList</Text>
            </View>

            <SectionList
                sections={SECTION_LIST_CARS}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item}</Text>
                    </View>)}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>

    );
};

export default Settings;
