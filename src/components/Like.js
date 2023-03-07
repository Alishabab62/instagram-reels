import React, { Component } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {updateDoc , doc} from 'firebase/firestore'
import {  fstore } from '../firesbase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
export default class Like extends Component {
    constructor(){
        super()
        this.state ={
            like:false,
            likeCount: 0
        }
    }
    handleLike = ()=>{
        if(this.state.like === true){
            console.log(this.props.postData.likes.length)
            let tempArr = this.props.postData.likes.filter((el) => el!== this.props.userData.userId ) ;
            let temRef = doc(fstore, "posts" ,this.props.id);
            updateDoc(temRef , {likes:tempArr}).then((res)=>{
                this.setState({
                    like:false,
                    likeCount:this.props.postData.likes.length-1
                })
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
        else{
            let tempArr = [...this.props.postData.likes , this.props.userData.userId];
            let temRef = doc(fstore, "posts" ,this.props.id);
            updateDoc(temRef , {likes:tempArr}).then((res)=>{
                this.setState({
                    like:true,
                    likeCount:this.props.postData.likes.length+1
                })
                console.log(res)
            }).catch((error)=>{
                console.log(error)
            })
        }
    }
    componentDidMount(){
        let check = this.props.postData.likes.includes(this.props.userData.userId) ? true : false
        this.setState({
            like:check,
           
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.like === true ? <FavoriteIcon style={{fontSize:"35px" , color:"red"}} onClick = {this.handleLike}/> : <FavoriteBorderIcon style={{fontSize:"35px" , }}  onClick = {this.handleLike}/>
                }
                <p>{this.state.likeCount}</p>
            </div>
        )
    }
}
