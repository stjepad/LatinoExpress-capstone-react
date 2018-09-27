import React, { Component } from "react"
import NavBarForm from './navBar/NavBarForm'
import Establishment from './establishment/Establishment'
import Vote from './vote/Vote'
import TacosVote from './vote/VoteTacos'
import MargaritaVote from './vote/VoteMargaritas'
import QuesoVote from './vote/VoteQueso'
import BurritoVote from './vote/VoteBurritos'
import SalsaVote from './vote/VoteSalsa'
import  './mainView.css'


class MainView extends Component {



    render() {
        return (
            <React.Fragment>

            <div className="cover">
                <div className="establishmentMainView">
                <Establishment {...this.props}/>
                </div>
                <div className="voteMainView">
                <Vote {...this.props}/>
                <TacosVote {...this.props}/>
                <MargaritaVote {...this.props}/>
                <QuesoVote {...this.props}/>
                <BurritoVote {...this.props}/>
                <SalsaVote {...this.props}/>
                </div>
                {/* <Messages {...this.props}/> */}
                </div>
            </React.Fragment>
        )
    }
}

export default MainView