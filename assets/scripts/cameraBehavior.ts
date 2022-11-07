import { _decorator, Component, Node, director, CCInteger, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('cameraBehavior')
export class cameraBehavior extends Component {
    @property({type:Node})
    private playerNode;
    @property({type:CCInteger})
    public minX;
    @property({type:CCInteger})
    public maxX;
    @property({type:CCInteger})
    public offsetY;
    public setPlayerNode(node){
        this.playerNode = node;
    }
    public getPlayerNode(){
        return this.playerNode;
    }
    start() {
    }

    update(deltaTime: number) {
        let playerPos = this.playerNode.position;
        let cameraPos = this.node.position;
        cameraPos.lerp(new Vec3(playerPos.x,playerPos.y + this.offsetY , playerPos.z), 0.1);
        if (cameraPos.x < this.minX) cameraPos.set(this.minX,cameraPos.y ,cameraPos.z )
        else if (cameraPos.x > this.maxX) cameraPos.set(this.maxX,cameraPos.y ,cameraPos.z )
        
        this.node.setPosition(cameraPos);
    }
}


