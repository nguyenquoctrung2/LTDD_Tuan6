import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.styles1}>
        <Image source={require('./assets/vsblue.png')}
                style={{width:'300px',height:'350px'}}></Image>
      </View>
      <View style={styles.styles2}>
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>
      <View style={styles.styles3}>
        <View style={styles.styles31}>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
          <Image source={require('./assets/star.png')}
                    style={{width:'30px',height:'30px'}}></Image>
        </View>
        <Text style={styles.title}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.styles4}>
      <Text style={styles.title1}>1.790.000 đ</Text>
      <Text style={styles.title2}>1.790.000 đ</Text>
      </View>
      <View style={styles.styles5}>
        <Text style={{color:'red',fontSize:14,fontWeight:'bold',margin:'25px'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./assets/Group 1.png')}
        style={{width:'20px',height:'20px',margin:'10px'}}></Image>
      </View>
      <View style={styles.styles6}>
        <Pressable >
          <Text style={styles.title3}>4 MÀU-CHỌN MÀU</Text>
          <Image source={require('./assets/Vector.png')}
                  style={{width:'15px',height:'15px',position:'absolute',bottom:'7px',left:'325px'}}></Image>
        </Pressable>
      </View>
      <View style={styles.styles7}>
      <Button title='Chọn Mua'
        color='red'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    margin:'10px',
  },
  styles1:{
    flex:8,
    //justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  },
  styles2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  styles3:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  styles31:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  styles4:{
    flex:1,
    flexDirection:'row',
    // justifyContent:'space-around',
    alignItems:'center',
  },
  styles5:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  styles6:{
    flex:1,
    flexDirection:'column',
    gap:'10px',
    justifyContent:'center',
    borderWidth:'1px',
    borderRadius:'10px',
  },
  styles7:{
    flex:2,
    flexDirection:'column',
    gap:'10px',
    justifyContent:'flex-end',
  },
  title:{
    fontSize:16,
  },
  title1:{
    fontSize:25,
    fontWeight:'bold',
    margin:'25px'
  },
  title2:{
    fontSize:16,
    color:'grey',
  },
  title3:{
    textAlign:'center',
    padding:'5px',
    fontSize:16,
  }
});
