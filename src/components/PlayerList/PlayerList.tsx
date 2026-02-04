import type { JSXElement } from "@fluentui/react-components";
import { List, ListItem } from "@fluentui/react-components";
import { tokens, Text, makeResetStyles } from "@fluentui/react-components";

const dynamicObjects = {
    "_id": {
        "$oid": "67d56d17ee565d42b354c8f1"
    },
    "players": {
        "51d8afb4-9f9f-48a4-a72d-2698f6f54317": {
            "id": "51d8afb4-9f9f-48a4-a72d-2698f6f54317",
            "x": -67.83090918439572,
            "y": 100.42900430344343,
            "z": 14.38599466740894,
            "rotX": -1.620494392385299,
            "rotY": -0.7655123806539786,
            "rotZ": -1.6424565743576292,
            "worldConstants": {
                "xTranslation": 1014367.9377729294,
                "yTranslation": -183,
                "zTranslation": -6659930.489105858
            }
        },
        "00002dcf-a441-42b2-8d6d-48e7d94637be": {
            "id": "00002dcf-a441-42b2-8d6d-48e7d94637be",
            "x": -154.51097635296173,
            "y": 7.013894890508709,
            "z": 74.9345930851996,
            "rotX": -0.17785642488653564,
            "rotY": 0.48937370633992994,
            "rotZ": 0.08429815102254613,
            "worldConstants": {
                "xTranslation": 1014739.0027422404,
                "yTranslation": -183,
                "zTranslation": -6660622.686270231
            }
        },
        "af108693-d540-40d1-8d1e-480e41a72d22": {
            "id": "af108693-d540-40d1-8d1e-480e41a72d22",
            "x": -144.13478088378906,
            "y": 7.653360843658447,
            "z": -298.7471008300781,
            "rotX": 0.08318875782619178,
            "rotY": 0.18195898509779568,
            "rotZ": -0.015087228692935226,
            "worldConstants": {
                "xTranslation": 1019191.7823739713,
                "yTranslation": -285,
                "zTranslation": -6664628.703493051
            },
            "socketId": "pOBpoVmlOYi_WlzkAABv"
        },
        "5f2e3ebd-53a6-494a-bfa9-5139611191b0": {
            "id": "5f2e3ebd-53a6-494a-bfa9-5139611191b0",
            "x": 24.197864721537886,
            "y": 28,
            "z": 86.29539902364876,
            "rotX": -0.5732538819610928,
            "rotY": -0.533152489961833,
            "rotZ": -0.31704302848134813,
            "worldConstants": {
                "xTranslation": 1014862.6910653441,
                "yTranslation": -186,
                "zTranslation": -6660573.24165306
            }
        },
        "9a41f79f-c146-49cd-b7e8-59e94399ac90": {
            "id": "9a41f79f-c146-49cd-b7e8-59e94399ac90",
            "x": 6.9167559312946985,
            "y": 2.138624894618988,
            "z": 97.5433455423381,
            "rotX": -2.6774132543747164,
            "rotY": -0.04609766618182305,
            "rotZ": -3.1185254347823568,
            "worldConstants": {
                "xTranslation": 1013625.8078343078,
                "yTranslation": -189,
                "zTranslation": -6658793.436498533
            },
            "socketId": "7MxaxaiUOL5PYwHpAADR"
        }
    },
    "uid": "67d4c2247c4423315e282711",
    "devices": {},
    "cards": {},
    "vehicles": {}
}

const useTextStyle = makeResetStyles({

  color: tokens.colorNeutralForeground1,

});

export default function PlayerList() {

    const textStyle = useTextStyle();

    const listItems = Object.values(dynamicObjects.players).map(player =>

        <ListItem key={player.id}>

            <Text className={textStyle}>{'Spieler: ' + player.id + ' befindet sich an Position: x=' + player.x + ' y=' + player.y + ' z=' + player.z}</Text>
        
        </ListItem>

    )

    return (
        <List navigationMode="items">{listItems}</List>
    )

}