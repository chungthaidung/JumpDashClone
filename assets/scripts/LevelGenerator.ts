import { _decorator, Component, Node, Prefab, instantiate, random, math, Vec3, find, CCInteger, CCFloat, view } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelGenerator')
export class LevelGenerator extends Component {
    @property({type:Vec3})
    private startPosition;
    @property([Prefab])
    private levelParts: Prefab[] = [];
    @property({type:Node})
    private camera;
    @property({type:CCFloat})
    private spawnOffSet;
    private lastPart;
    private endPartPos;
    private spawnCount = 0;
    start() {
        this.lastPart = this.SpawnLevelPart(new Vec3(0,0,0))
        this.endPartPos = this.lastPart.getChildByName('endPos').position;
    }
    public SpawnLevelPart(spawnLocation)
    {
        let newPart = instantiate(this.levelParts[math.randomRangeInt(0,this.levelParts.length)]);
        newPart.setPosition(spawnLocation);
        newPart.parent = this.node;
        return newPart
    }
    update(deltaTime: number) {
        if (this.camera.position.y <= this.endPartPos.y ){
            this.lastPart = this.SpawnLevelPart(new Vec3(0, this.lastPart.position.y + this.endPartPos.y + this.spawnOffSet,0));
            this.endPartPos = this.lastPart.getChildByName('endPos').position;
        }
    }
}
