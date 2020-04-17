import React, {Component} from 'react';
import {ScrollView, Text, Modal,TouchableHighlight,View,FlatList} from 'react-native';
import styles from '../terms/styles';
import {AppStyles} from '../../../themes';
import { Actions } from 'react-native-router-flux';

interface IState {
  modalVisible: boolean;
  setModalVisible: boolean;
  pageContent:any
}

interface IProbs {
}

class TermsPage extends Component<IProbs,IState> {
  constructor(props: IProbs) {
    super(props);
    this.state = {modalVisible:true,setModalVisible:true,pageContent:''};
  }
  componentDidMount() {
    this.setState({pageContent:[
      {content:"Welcome, and thank you for your interest in the website www.ByteLyfe.app (the “Website”) and our mobile application ByteLyfe (the “App”), together hereafter referred to in these Terms of Service as “ByteLyfe”, “us”, “our” or “we”. "},
      {content:"ByteLyfe is owned and operated by Dualis Digital, Inc., a Michigan corporation, and for the purposes of this Agreement and our Privacy Policy any use of the terms “ByteLyfe”, “us”, “our” or “we” includes Dualis Digital, Inc., without limitation."},
      {content:"Unless otherwise specified, all references to our services (the “Service” or “Services”) include the content, services and products available through the ByteLyfe Website or App, as well as any software that ByteLyfe provides to you that allows you to access the Services."},
      {content:"The term “user”, “you” or “your” refers to the user of the Service, including visitors that do not register for an account or purchase a subscription to our Services. The following Terms of Service are a legally binding contract between you and ByteLyfe regarding your use of the Service."},
      {content:"Please read the following Terms of Service (“Terms” or “Agreement”) carefully before accessing or using any of the Services."},
      {content:"Each time you access or use our Services, subscribe to a plan or purchase something from us, you agree to be bound by these Terms of Service and our Privacy Policy whether or not you register with us. If you do not agree to be bound by all of these Terms, you may not access or use our Service."},
      {content:"ByteLyfe may change this Agreement at any time by posting an updated Terms of Service on this site. "},
      {content:"If any amendment to these Terms is unacceptable to you, you shall cease using this Site or App. "},
      {content:"If you continue using the Site or the App, you will be conclusively deemed to have accepted the changes. "},
      {content:"In addition, certain areas of the Service may be subject to additional Terms of Service that we make available for your review."},
      {content:"By using such areas, or any part thereof, you are expressly indicating that you have read and agree to be bound by the additional Terms of Service applicable to such areas."},
      {content:"In the event that any of the additional Terms of Service governing such area conflict with these Terms, the additional terms will control."},      
    ]});
  }
  setModalVisible(_status:boolean){this.setState({modalVisible: _status,setModalVisible:_status});}
  render() {    
    return (
      <View style={AppStyles.container}> 
        <Modal animationType="slide"  transparent={true} visible={this.state.modalVisible}>        
          <ScrollView style={styles.modalView}>
            <Text style={styles.modalTitleTxt}>Terms of Service</Text>
            <View style={{margin:'5%'}}>
            <FlatList data={this.state.pageContent}renderItem={({item}) => <View style={{flexDirection: 'row'}}><Text style={{flex: 1, paddingLeft: 5}}>{item.content}</Text></View>} />              
            </View>
            <TouchableHighlight style={{ ...styles.openButton, backgroundColor: "#2196F3" }} onPress={() => {Actions.pop()}}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </ScrollView>        
      </Modal>
      </View>
    );
  }
}

export default TermsPage;
