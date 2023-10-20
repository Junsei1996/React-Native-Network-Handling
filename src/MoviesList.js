import ListItem from "./ListItem";

const { View, StyleSheet, FlatList, Text } = require("react-native");

function renderMovieItem(itemData) {
    return <ListItem title={itemData.title} year={itemData.releaseYear}/>
}

function MoviesList({ movies }){
    return(
        <View style={{
            flex:1,
            height:'100%',
            width:'100%'
            }}>
            <FlatList style={{
            flex:1,
            height:'100%',
            width:'100%'
            }} renderItem={({item}) => (renderMovieItem(item))} data={movies}/>
        </View>
    )
}

export default MoviesList;

const styles = StyleSheet.create({

})