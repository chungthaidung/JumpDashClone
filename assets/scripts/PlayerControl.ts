import { _decorator, Component, Node, EventKeyboard, Vec3, SystemEventType, systemEvent, macro, CCInteger, RigidBody2D, find, CCFloat } from 'cc';
import { appRoot } from './appRoot';
import { scoreManager } from './scoreManager';
const { ccclass, property } = _decorator;
const STATE = {
    IDLE: 0,
    MOVING_LEFT: 1,
    MOVING_RIGHT: 2,
}
@ccclass('PlayerControl')
export class PlayerControl extends Component {
    private state = STATE.IDLE;
    @property({type:Node})
    private scoreNode;
    @property({ type: CCInteger })
    private maxX;
    @property({ type: CCInteger })
    private minX;
    @property({ type: CCFloat })
    private velocityX;
    @property({ type: CCFloat })
    private velocityY;
    @property({type:CCFloat})
    private incVelocity;
    public setScoreManager(node)
    {
        this.scoreNode = node;
    }
    public getScoreNode()
    {
        return this.scoreNode;
    }
    public setState(newstate){
        this.state = newstate;
    }
    public stateUpdate(deltaTime: number) {
        
        switch (this.state) {
            case STATE.IDLE:
                this.node.position = new Vec3(this.node.position.x, this.node.position.y + this.velocityY * deltaTime*1000 , 0);
                break;
            case STATE.MOVING_LEFT:
                this.node.position = new Vec3(this.node.position.x - this.velocityX * deltaTime*1000, this.node.position.y + this.velocityY * deltaTime*1000, 0);
                break;
            case STATE.MOVING_RIGHT:
                this.node.position = new Vec3(this.node.position.x + this.velocityX * deltaTime*1000, this.node.position.y + this.velocityY * deltaTime*1000, 0);
                break;
        }

    }
    start() {
        systemEvent.on(SystemEventType.KEY_DOWN, this.onKeyDown, this);

    }

    update(deltaTime: number) {
        console.log(this.velocityY);
        this.stateUpdate(deltaTime);
        if (this.node.position.x > this.maxX) {
            this.node.position = new Vec3(this.maxX, this.node.position.y);
        } else if (this.node.position.x < this.minX) {
            this.node.position = new Vec3(this.minX, this.node.position.y);
        }
        if ((this.node.position.x  >= this.maxX || this.node.position.x  <= this.minX) && this.state != STATE.IDLE ){
            this.setState(STATE.IDLE);
            if (this.scoreNode){
                let scoremanager = this.scoreNode.getComponent(scoreManager);
                scoremanager.setScore(scoremanager.getScore() + 1);
                if (scoremanager.getScore()%20 == 0) {
                    this.velocityY += this.incVelocity;
                }
            }
        }
    }
    
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            default:
                break;
            case macro.KEY.a:
                if (this.state == STATE.IDLE) {
                    if (this.node.position.x == this.maxX) {
                        this.setState(STATE.MOVING_LEFT);
                    }
                }
                break;
            case macro.KEY.d:
                if (this.state == STATE.IDLE) {
                    if (this.node.position.x == this.minX) {
                        this.setState(STATE.MOVING_RIGHT);
                    }
                }
                break;
        }
    }
}

