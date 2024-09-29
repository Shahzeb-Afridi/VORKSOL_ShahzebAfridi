import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
const DetailedContactScreen = ({route, navigation}) => {
  const {contact} = route.params;
  return (
    <View style={styles.container}>
      {contact.image?(
        <Image source={{uri: contact.image}} style={styles.contactImage} />
      ):(
        <View style={styles.contactAvatar}>
        <Text style={styles.avatarText}>
          {contact.name[0].toUpperCase()}
        </Text>
      </View>
      )}
      
      <Text style={styles.contactName}>{contact.name}</Text>
      <Text style={styles.contactPhone}>{contact.phone}</Text>
      <Pressable onPress={()=> navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </Pressable>
    </View>
  );
};

export default DetailedContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  contactAvatar: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#f0a500', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 48,
    color: '#fff', 
    fontWeight: 'bold',
  },
  contactName: {
    fontSize: 34,
    color:'black',
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 22,
    color: 'gray',
  },
  backButton:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:10,
    height:40,
    width:120,
    backgroundColor:'#007FFF',
    borderRadius:10
  },
  backButtonText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
});
