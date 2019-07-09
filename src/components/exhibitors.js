import React, {Component} from 'react';

import API from '../utils/API';

import Header from './menuTop';
import Interests from './intressets';

import './index.css';
import './devices.min.css';

import Truncate from 'react-truncate';

class Exhibitors extends Component{
        state = {
            isLoading : true,
            Pagename: '',
            posts: [],
            banner: false, 
            intereset: [], 
            facebook: false, 
            twitter: false, 
            linkedin: false, 
            instagram: false, 
            homePage: false
        }


    componentDidMount() {
        API.get(this.props.match.params.id)
        .then (res => {
            this.setState ({
                isLoading: false,
                Pagename : res.data.ExhibitorLabel,
                intereset: res.data.Interesets,
                posts: res.data,
                facebook: res.data.ShowFacebook, 
                twitter: res.data.ShowTwitter,
                linkedin: res.data.ShowLinkedIn,
                instagram:res.data.ShowInstagram, 
                homePage: res.data.homePage
            })
        })
    }

 
 render(){
    const { isLoading, Pagename, facebook, linkedin, instagram, twitter, homePage} = this.state;

    const FaceBook = () => {
        if(facebook){
            return (
                <div><span><i className="fab fa-facebook-square"></i></span></div>
            )
        }
    }
    const Linkedin = () => {
        if(linkedin){
            return (
                <div><span><i className="fab fa-linkedin"></i></span></div>
            )
        }
    }
    const Instagram = () => {
        if(instagram){
            return (
                <div><span><i className="fab fa-instagram"></i></span></div>
            )
        }
    }
    const Twitter = () => {
        if(twitter){
            return (
                <div><span><i className="fab fa-twitter-square"></i></span></div>
            )
        }
    }
    const HomePage = () => {
        if(homePage){
            return (
                <div><span><i className="fas fa-link"></i></span></div>
            )
        }
    }

     return (
            <div className=" container marvel-device iphone8 silver d-flex justify-content-center">
            <div className="top-bar"></div>
            <div className="sleep"></div>
            <div className="volume"></div>
            <div className="camera"></div>
            <div className="sensor"></div>
            <div className="speaker"></div>
            <div className="screen">


            <div className="app">
            {/* App header */}

                <Header isLoading={isLoading} pageName={Pagename}/>
                {/* Banner goes here */}
                
                <div className="banner-header">
                    <img src={this.state.posts.banner} alt="banner"/>
                </div>
                {/* Title goes here */}
                <div className="conatiner title text-center mt-2 mb-1">
                    {/* AB TAKTIK SWEDEN UTBILDNING */}
                    {this.state.posts.CompanyName}
                </div>
                {/* booth goes here */}
                <div className="booth text-center">
                 {this.state.posts.Booth}
                </div>
                <div className="booth text-center">
                 {this.state.posts.BoothLabel}
                </div>
                {/* City goes here */}
                <div className="title area text-center mt-1">
                {this.state.posts.Location}
                </div>
                
                {/* action icons goes here */}
                 <div className="container action-icons d-flex justify-content-between pr-5 pl-5">
                    <div className="comment mb-1 mt-1">
                        <div className="text-center op-50"><span><i className="fas fa-clipboard"></i></span></div>
                        <div>Note</div>
                    </div>
                    <div className="comment mb-1 mt-1">
                        <div className="text-center op-50"><span><i className="fas fa-tags"></i></span></div>
                        <div>Offer</div>
                    </div>
                    <div className="comment mb-1 mt-1">
                        <div className="text-center op-50"><span><i className="fas fa-comments"></i></span></div>
                        <div>Message</div>
                    </div>
                    <div className="comment mb-1 mt-1">
                        <div className="text-center op-50"><span><i className="far fa-heart"></i></span></div>
                        <div>Save</div>
                    </div>
                 </div>
                <hr/>

                {/* About informtation */}
                <div className="about">
                    <div className="d-flex op-50 justify-content-between">
                        <div className="text-tile ml-3">Om</div>
                        <div className="description-icon mr-3"><span><i className="fas fa-sort-down"></i></span></div>
                    </div>
                    <div className="about-info ml-3 mr-3">
                    <Truncate lines={4} ellipsis={<span>...</span>}>
                    {this.state.posts.Description}
                    </Truncate>

                    </div>
                </div>
                <hr/>

                {/* social media icons */}

                <div className="social-media">
                    <div className="d-flex justify-content-around">
                    {FaceBook()}
                    {Linkedin()}
                    {Twitter()}
                    {Instagram()}
                    {HomePage()}
                    
                    </div>
                </div>
                <hr/>

                {/* Adress*/}
                <div className="adress">
                    <div className="text-tile ml-3 mb-1 op-50">Kontakt</div>
                    <div className="about-info ml-3 mr-3">
                    <div className="description-icon mr-3"><span><i className="fas fa-phone mr-2 op-50"></i>{this.state.posts.phone}</span></div>
                    <div className="description-icon mr-3"><span><i className="fas fa-building mr-2 op-50"></i>{this.state.posts.adress}</span></div>
                    <div className="description-icon mr-3"><span><i className="fas fa-envelope mr-2 op-50"></i>{this.state.posts.email}</span></div>
                    </div>
                </div>
                <hr/>

                {/* Areas of intereset  */}
                <div className="interesets">
                    <div className="text-tile  ml-3 mr-3 mb-1 op-50">Intressen</div>
                {
                    this.state.intereset.map((val, index) => {
                        return <Interests 
                           
                        activities={val}
                        key={index}     
                        />
                    })
                }
                </div>

            </div>
         
    </div>
    <div className="home"></div>
    <div className="bottom-bar"></div>
</div>






         
     )
 }
}

export default Exhibitors;