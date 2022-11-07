import { _decorator, Component, Node, Contact2DType, Collider2D, IPhysics2DContact, director, find } from 'cc';
import { appRoot } from './appRoot';
import { PlayerControl } from './PlayerControl';
import { scoreManager } from './scoreManager';

const { ccclass, property } = _decorator;

@ccclass('collisionHandler')
export class collisionHandler extends Component {
    start() {
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

    }
    update(deltaTime: number) {

    }
    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log(otherCollider.node.name);

        director.stopAnimation();
        let _appRoot = find('root')?.getComponent(appRoot);
        if (_appRoot)
        {
            let playerControl = this.getComponent(PlayerControl);
            if (playerControl.getScoreNode())
            {
                let _scoreManager = playerControl.getScoreNode().getComponent(scoreManager);
                if (_scoreManager.getScore() > _appRoot.getDataCenter().getHighestScore())
                {
                    _appRoot.getDataCenter().setHighestScore(_scoreManager.getScore())
                }
                
            }
        }
        director.loadScene('root');
    }
}


