class AutonomousAgent {
    properties: AutonomousAgentProperty[]
    items: Item[]
    location: SpatialLocation
}

// ===
// === PROPERTIES
// ===
enum AutonomousAgentPropertyType {
    Scalar,
    Percentage,
    TextRange,
    TextEnum
}
abstract class AutonomousAgentProperty {
    name: string
    type: AutonomousAgentPropertyType
}
// Property definitions
class Intellect extends AutonomousAgentProperty {
    name = 'intellect'
    type = AutonomousAgentPropertyType.Scalar
}
class Dexterity extends AutonomousAgentProperty {
    name = 'dexterity'
    type = AutonomousAgentPropertyType.Scalar
}
class Willpower extends AutonomousAgentProperty {
    name = 'willpower'
    type = AutonomousAgentPropertyType.Scalar
}

class AutonomousAgentGoal {
}

// ===
// === AA ACTIONS
// ===
enum AutonomousAgentActionTargetType {
    SingleAgent,
    MultipleAgents,
    SpatialLocation
}

abstract class AutonomousAgentAction {
    abstract name: string
    abstract targetType: AutonomousAgentActionTargetType
}

// ===
// === ITEMS
// ===
abstract class Item {
    name: string
    id: string
}

class Rifle extends Item {
    name = 'Rifle'
}

// ===
// === SPATIAL LOCATIONS
// ===
class SpatialLocation implements Narratable {
    id: string
    connections: SpatialLocationConnection[]
    
    texts = {
        description: '',
        singularLabel: '',
        pluralLabel: ''
    }

    constructor (texts: NarratableTexts) {
        this.texts = texts
    }

    static Connect (l1: SpatialLocation, l2: SpatialLocation, d: number) {
        l1.connections.push({
            target: l2,
            distance: d
        })
        l2.connections.push({
            target: l1,
            distance: d
        })
    }
}
interface SpatialLocationConnection {
    target: SpatialLocation
    distance: number
}

const rooms = []

// ===
// === NARRATION
// ===
interface Narratable {
    texts: NarratableTexts
}
interface NarratableTexts {
    description: string
    singularLabel: string
    pluralLabel: string
}

const guy = new AutonomousAgent()