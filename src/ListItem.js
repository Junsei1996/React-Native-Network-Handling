const { View, StyleSheet, FlatList, Text } = require("react-native");

function ListItem({ title, year }) {
    return (
        <View style={{flex:1, width:'100%'}}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{year}</Text>
        </View>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    text:{
        color:'#ffffff'
    }
})