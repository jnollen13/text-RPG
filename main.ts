namespace SpriteKind {
    export const allie = SpriteKind.create()
}
function quest9 () {
    adventure.addToTextlog("You got tackled and pinned down by pirates.")
    pause(100)
    adventure.addToTextlog("They decided to make you the cabin boy.")
    pause(100)
    adventure.addToTextlog("Cabin boy jobs include:    moping the decks,  following orders,  untangling the ropes, & cleaning the ship.")
    pause(1500)
    adventure.addToTextlog("press (A) to get to work.   Press (B) to try and annoy them into letting you go.             press (arrow key) to jump over the side of the boat.")
    pause(100)
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you get to work immediately.")
        questsplit1b()
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("you start singing the wellerman:")
        adventure.addToTextlog("there once was a ship that put to sea, the name of the ship was the billy o' tea. The winds blew hard and bowed her down and blow my billy boys, blow. Soon may the wellerman come to bring us sugar and tea and rum one day when the tugging is done will take our leave and go. She'd  not been to weeks from shore when down on her a right whale bore. The captin called all hands and swore he'd take that whale in tow.  Soon may the wellerman come to bring us sugar and tea and rum one day when the tugging is done we'll take our leave and go. Da-da-da-da-da Da-da-da-da-da-da-da Da-da-da-da-da-da-da-da-da-da-da. Before the boat had hit the water The whale's tail came up and caught her All hands to the side, harpooned and fought her When she dived down low. soon may the wellerman come to bring us sugar and tea and rum one day when the tugging is done we'll take our leave and go. No line was cut, no whale was freed The captain's mind was not of greed And he belonged to the Whaleman's creed She took that ship in tow. Soon may the Wellerman come To bring us sugar and tea and rum One day, when the tugging is done We'll take our leave and go. Da-da-da-da-da Da-da-da-da-da-da-da Da-da-da-da-da-da-da-da-da-da-da. For forty days or even more The line went slack then tight once more All boats were lost, there were only four But still that whale did go. Soon may the Wellerman come To bring us sugar and tea and rum One day, when the tugging is done We'll take our leave and go. As far as I've heard, the fight's still on The line's not cut, and the whale's not gone The Wellerman makes his regular call To encourage the captain, crew and all. Soon may the Wellerman come To bring us sugar and tea and rum One day, when the tugging is done We'll take our leave and go. Soon may the Wellerman come To bring us sugar and tea and rum One day, when the tugging is done We'll take our leave and go.")
        pause(200)
        adventure.addToTextlog("The pirates told you that they changed their minds and decided that you would sing sea shantys for them.")
        pause(1000)
        questsplit1()
    } else {
        adventure.addToTextlog("you jumped over the side of the ship.")
        adventure.addToTextlog("It was wet.")
        adventure.addToTextlog("the pirates pulled you aboard and forced you to work at sword point.")
        questsplit1b()
    }
}
function quest3 () {
    music.play(music.createSong(assets.song`quest_from_the_king`), music.PlaybackMode.InBackground)
    scene.setBackgroundColor(15)
    adventure.addToTextlog("you are traveling")
    adventure.addImageToTextLog(assets.image`wounded`)
    adventure.addToTextlog("you enter a forest")
    adventure.addToTextlog("Press (A) to keep going")
    adventure.addToTextlog("Press (B) to run away")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you keep going")
        adventure.addImageToTextLog(img`
            .55................................................55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55eeeeeeeeeeeeeeeeeeeee111111eeeeeeeeeeeeeeeeeeeee55.
            .55dddddddddddddddddddd15555554dddddddddddddddddddd55.
            .55dddddddddddddddddddd155ee554dddddddddddddddddddd55.
            .55dddddddddddddddddddd15eeee54dddddddddddddddddddd55.
            5555555555555555555555515eeee5455555555555555555555555
            11111111111111111111111155ee55411111111111111111111111
            55555555555555555555555155ee55455555555555555555555555
            55555555555555555555555155ee55455555555555555555555555
            444444444444444444444441555555444444444444444444444444
            .55ddddddddddddddddddddd444444ddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            .55dddddddddddddddddddddddddddddddddddddddddddddddd55.
            111111111111111111111111111111111111111111111111111111
            555555555555555555555555555555555555555555555555555555
            555555555555555555555555555555555555555555555555555555
            `)
        adventure.addToTextlog("you got coins!")
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest4()
    } else {
        adventure.addImageToTextLog(assets.image`dagon`)
        adventure.addToTextlog("you were eaten by a dragon...")
        info.changeLifeBy(-3)
    }
}
function quest4 () {
    adventure.addToTextlog("you exit the forest.")
    adventure.addToTextlog("you see a castle...")
    adventure.addImageToTextLog(img`
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        .......................................d..................................................
        ......................................dcf.................................................
        ......................................daf.................................................
        .....................................dbabf................................................
        .....................................dacccf...............................................
        ....................................dbacccf...............................................
        ....................................dabccbbf..............................................
        ....................................dabcccbf..............................................
        ...................................dabccccbbf.............................................
        ...................................dacbcbcccf.............................................
        ..................................dcbbbcbbbccf.....dbbbb.baaa..baaa.......................
        ..................................dacccccccccff....daccb.accc.daccf.......................
        .................................dcaccbbbbccccf....dacbb.accc.dacbf.......................
        .................................dabbbbbbbbbbbff...dbccb.abbb.dbbcf.......................
        ................................dbbcccccccccbbbf...daccbbbccbbdcccf.......................
        ................................ffcccccccccccfff....acbbcccbbccbcbf.......................
        ..................................ffffffffffff......accbcccccccccbf.......................
        ..................................ccbbbbbbcccc......accbbbbbbcccccf.......................
        ..................................abcbbccbbbbb.......bbbcbbbccbbbf........................
        ..................................bbcbbbbbbbbb........baccccffcbf.........................
        ..................................abbbcccbbbbb........dacccffffff.........................
        ..................................bccccccccccb........dacbbbbbccf.........................
        ...................................cccccccccf.........dbbbbccbbcf.........................
        ...................................abcccccccf.fffffff.cabbbbccccf.........................
        ...................................abccbbbbbffaaaadbff6abccbbbbcf.........................
        ................daabb..bbbbb..bbbf.bbccbbbbcfaadbbbbb66abbbbbbbcf.........................
        ................dbbbb..bbbbb..bbbf.abbbbbbbcfbbcbbcbbccabbbccbbcf.........................
        ................dccccbfcccccbbcccf.abbbcbccbfbbbbbcbbbfabbbccbbcf.........................
        ................dbbbbbbbbbbbbbbcbf.abbccbbbcfbbcccbbbbfbbbbbbbbcf.........................
        ................dccbbbbcbcccbbccbf.abbbbbbbcfcccccccbbfabbbbccccf.........................
        .................baccccccccccccccf.bbcbbbbbcfcc...cccffabcbbccccf.........................
        ..................abbbbbbcbbbbbbcf.abccbbbbcfc.....ccffabbbbbbccf.........................
        ..................cabccbbccbbbccf..abccbccbcf.......cffabbbbbbccf.........................
        ...................cabbbbbbbbcff...abccbbbbcf.......cffacbbcbbccf.........................
        ....................ccccccccfff....abccbbbbcf.......cffacbbcbbccf.........................
        ....................cccccccccccddbbbbccbbbbcf.......cffacbbbbbccf.........................
        ....................dabbbbbbbbcbbccccccbbbbbff.....ccfbacbbbbbccf.........................
        ....................dbbbccbbbbcbcccccccccbbccbf...cccfaccccccbccf.........................
        ....................dacbccbbcccbcce4ccbbbbbbccbfccccaacbbbcbbbccf.........................
        ....................dacbbbbbcbbbcc4cccbbccbbcbbbbccccbcbbbbcbcccf.........................
        ....................dabbbbcbbbbbbccbbbcbccbbcbbbbcbbbcbbccccccccf.........................
        ....................dbbbbbccbbccbccbbbcbbbbbcbbcccbccccbccbbbbccf.........................
        ....................daccbbbfaaccbbbbbbbbbbbbbbbbccbbbcfaaabbcbccf.........................
        ....................dabbbbfcccabbbbbbbccbbcccbbbbbbbbfcccabccbccf.........................
        ....................dabcbfcccccabcccbbccbbccbbbcccbbfcccccaccbccf.........................
        ....................dabcbfccbccabbcbbbbbbbbbbbbcccbcfccbccabbbccf.........................
        ....................dbbcbfcccccabbbbbbbbffcaabbbbbbcfcccccaccbccf.........................
        ....................dabbbfcccccabbcccccfcccccaabbbbbfcccccabbcccf.........................
        ....................dabcbfcccccabccbbbfcccbcbcaabbbbfcccccabccccf.........................
        ....................daccbfcccccabbbbbfccbcbcbcccaccbfcccccacbbccf.........................
        ....................dabbbfcccccabbccbcccbcbcbcccaccbfcccccaccbccf.........................
        ....................dabccfcccccabbbbfcccbcbcbcbccacbfbccccaccbccf.........................
        ....................dabccbbbbbbcccbfccbcbcbcbcbccabbcbbbbbbbbbbcf.........................
        ....................dbbbbbbbbbbccbbfccbcbcbcbcbccabbccccbbbbbbccf.........................
        ....................dabbbbbccbbbbbbfccbcbcbcbcbccabbbbccbbcbbcccf.........................
        ....................dabcbbcccbbbbbfcccbcbcbcbcbcccabbbbbbbccbcccf.........................
        ....................dabccbccbbbbbcfcccbcbcbcbcbcccabbbbcccbccbbcf.........................
        ....................daccbbbbbbbbccfcccbcbcbcbcbcccaccbbbccbbcbbcf.........................
        ....................daccbbbbbcbbcbfcccbcbcbcbcbcccabbbbbbbbbbbbcf.........................
        ....................daccbbbbbcccbbfcccbcbcbcbcbcccabbbcccbbbbcccf.........................
        ....................daccbbccbbccbbfcccbcbcbcbcbcccaccbcccbbcccbcf.........................
        ....................dabbccbbbbbbbbfcccbcbcbcbcbcccaccbbbbbbbbbbcf.........................
        ...................bdabbcbbbbbbbbbfcccbcbcbcbcbcccacbbbbbbbbbbbcf.........................
        .................fcbdcbbbccbcbbbccfcccbcbcbcbcbcccaccbbbcccbbbbcf.ffff....................
        ................cccbbcccbccbccbcccfcccbcbcbcbcbcccacbbbcccbbbbbfffcccffff.................
        .............22cccccccccbbcbbbbbbbfcccbcbcbcbcbcccabbbbbbbbbbbffcccfffffc22...............
        ............cccacc22fff2ccbbbbbbccfcccbcbcbcbcbcccabbbbbbbbbfcaacccfcccbcbb2.22...........
        .......222cccc222222222222ccbbbccbfcccbcbcbcbcbcccabcbbbbbbbbfccaaaac22cccc222c2..........
        ........bccc22a2c2acfcc2222cffbcbfccccbcbcbcbcbcccabcbbbbffcaacccc222222bcbc22a22.........
        .......caaa2222ccccccc22cc22cc222caaaaaaaaaaaaaaabbbcbbaaaffffaaac222222222a22c22c........
        ......cccc2222ccaccbaccca222222c2bcccccccccccccccccbbca22cbcbacacccc2222222abc2cccf.......
        .....c.ccccccccccbbbbccccc22222ccbccccccccccccccccc222222caaaaaaaaccc2222222c22c22........
        ....cc2222222ccccbaccb2cccaca2aaaaaaaaaaaaaabbbbb222c22222bcaaccccccc222222c2222222.......
        ........2222cccccb222222222222bcccccccccccccccb22222c22222ccccccccccc2222222222222c.......
        ..22222222ccc2cbcc2bccc2ac2222bcccccccccccccccb222c2c2ccbcaccaacccccca22222222222222......
        .........22222cbbcccbbb2222aaaaaaaaaaaaaaaabc222c2c2c2ac22ccccacc22222c2caa222222c22222...
        ...2222.c.accccbcbccccc2222bccccccccccccccccc2c222c2c22222bcccccccbcc2c2c2222c2222222222..
        ..222222222222ccccccbc2222cbccccccccccccccccc2c222c22222ccfccbbccccc2222222cc2222222222222
        .....222a.a2c2cbabcbabcbaaaaaaaaaaaaaaccccc222c2c2c222b222bbbcbcb222222222222.............
        ......c.fffffffffffffffffbccccccccccccccccc222222222222ccccccccccccc22c......ccb..........
        .........................bccccccccccccccccc2cc22222cc.222222222222222222..................
        .........................bbbbbbbbbbbbbbbbbbbb.............................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        ..........................................................................................
        `)
    adventure.addToTextlog("press(A) to keep walking.")
    adventure.addToTextlog("press(B) to run away")
    pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you keep walking.")
        pause(500)
        adventure.addToTextlog("you arrive at the castle.")
        pause(37)
        quest5()
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("you run away.")
        pause(11)
        quest6()
    }
}
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
function quest1 () {
    scene.setBackgroundImage(assets.image`bg0`)
    music.play(music.createSong(assets.song`going_on_an_adventure`), music.PlaybackMode.InBackground)
    adventure.addToTextlog("A traveling knight approaches and asks you to join her adventure, and help her remove enemys...")
    pause(1000)
    adventure.changeLogColors(1, 9)
    adventure.addImageToTextLog(img`
        ..............c...........................eeeeeee.
        .............cbb.........................e4444444e
        .............ccb.......................eee4ddddd44
        .............cbb.......................e4ee4555554
        .............ccb.....................eee444e44444e
        .............cbb.....................eeeee44eeeee.
        .............ccb...........bccccccccccc1..........
        .............cbb..........bcccccccccccbb1.........
        .............ccb.........bccfffffffffffbb1........
        .............cbb.........ccff11ffff11fffbb........
        .............ccb.........ccff11ffff11fffbb........
        .............cbb.........ccfffffffffffffbb........
        .............ccb.........ccfffffffffffffbb........
        .............cbb.........ccfffffffffffffbb........
        .............ccb.........cccbbbbbbbbbbbcbb........
        .............cbb.........ccccbbbbbbbbccbbb........
        .............ccb.........cccccccccccccbbbb........
        .............cbb.........ccccccccbcbbbbbbb........
        .............ccb.........cccccccccbbbbbbbb........
        .............cbb.........ccccccccbcbbbbbbc........
        .............ccb.........cccccccccbbbbbbbc........
        .............cbb.........ccccccccccbbbbccc888.....
        .............ccb......88ffcccccccbcbbbccc8f188....
        .............cbb.....8cbbffcccccccbbbbcc8fcb1188..
        .............ccb....8bbccbcf8ccbcccbbccffcccbb188.
        .............cbb...8bcbcbcb8ffcccccccc8fccccccb188
        .............ccb...8cbccccc8ffffffffffff88cccccb18
        .............cbb..8bccccc8ffccccbcbcbbcdff8ccccbb8
        ..........ee.ccb.ee8cccc8ffccccccbbbbddbbff8ccccc8
        ...........eeeeeee2ff888ffcccccbcdbddbbbbbf888888.
        ...........222222222ffff8cccbcbcbbbdbbbbbbfffffff.
        ..........22222222222ccf8ccbcbcbcbbbdbbbbb8ffcccb.
        ..........22222222222ccf8cccbcbcbbbdbbbbbb8ffcccb.
        ..........22222222222ccffccccbcbccbbdbbbb8f.fcccb.
        ..........2222222222fff.8f8ffffffffffff88f...cccb.
        ...........222222.2ff.....f8888888888888f....cccb.
        .............eec..........ffffffffffffff.....cccb.
        .............e.c........eeeeeee4eeeeeeeeee...cccb.
        ..............e.........eeeeede4d5d5deeeee...fccb.
        ..............e........eeeee45e45d5d5d4eeee..fccb.
        .......................eeee45de4d5d5d5d4eee..cccb.
        .......................eeeeed5e45d5eed5eeee.2222b.
        .......................eeee45de4d5dee5d4eee.22222c
        .......................eee4de5ee5d5eeded4ee222222c
        .......................e.4.4.4.e.4.e.4.4.e.2.2.2.c
        ........................e...4...4...e...4...2...2.
        `)
    if (varrible1 == 0) {
        adventure.addToTextlog("Press (A) to join the fun & easy fighting.")
        adventure.addToTextlog("Press (B) to turn and run towards the nearby cliff.")
        pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    } else if (varrible1 == 1) {
        adventure.addToTextlog("press (A) to continue")
        pauseUntil(() => controller.A.isPressed())
    }
    if (controller.A.isPressed()) {
        adventure.addToTextlog("You start to leave with the knight.")
        adventure.changeScoreOverride(adventure.Currency.Coins, 2)
        adventure.addImageToTextLog(assets.image`cion`)
        adventure.addToTextlog("You got paid.")
        adventure.changeLogColors(1, 9)
        quest2()
    } else {
        adventure.addToTextlog("it hurt a lot..")
        info.changeLifeBy(-1)
        scene.setBackgroundColor(2)
        pause(100)
        varrible1 = 1
        quest1()
    }
}
function questsplit1 () {
    adventure.addToTextlog("press (A) to jump off the boat and swim away as fast as you can.        press (B) to run around screaming .")
}
function quest21 () {
    adventure.addToTextlog("Press (A) keep fighting")
    adventure.addToTextlog("Press (B) to run away")
    pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you keep fighting...")
        adventure.addImageToTextLog(assets.image`land octopuss`)
        adventure.addToTextlog("you were killed by a land octopus.")
        info.changeLifeBy(-2)
    } else {
        adventure.addToTextlog("you found the traveling knight.")
        quest3()
    }
}
function questsplit1b () {
    adventure.addToTextlog("your arms hurt from scrubbing the decks.")
}
function quest2 () {
    music.play(music.createSong(assets.song`a_fairy_and_an_ogre`), music.PlaybackMode.InBackground)
    scene.setBackgroundColor(15)
    adventure.addToTextlog("A warfaring knight approaches and asks you to join his adventure, and help him kill ogres, trolls, orcs, and jotuns...")
    pause(2000)
    adventure.addImageToTextLog(img`
        ..............c...........................eeeeeee...............
        .........................................e4444444e..............
        .......................................eee4ddddd44e.............
        .......................................e4ee4555554e.............
        .....................................eee444e44444e..............
        .....................................eeeee44eeeee...............
        ...........................bccccccccccc1........................
        ..........................bcccccccccccbb1.......................
        .........................bccfffffffffffbb1......................
        .........................ccff22ffff22fffbb......................
        .........................ccff22ffff22fffbb......................
        .........................ccfffffffffffffbb......................
        .........................ccfffffffffffffbb......................
        .........................ccfffffffffffffbb......................
        .........................cccbbbbbbbbbbbcbb......................
        .........................ccccbbbbbbbbccbbb......................
        .........................cccccccccccccbbbb......................
        .........................ccccccccbcbbbbbbb......................
        .........................cccccccccbbbbbbbb......................
        .........................ccccccccbcbbbbbbc......................
        .........................cccccccccbbbbbbbc......................
        .........................ccccccccccbbbbccc888...................
        ......................88ffcccccccbcbbbccc8f188..................
        .....................8cbbffcccccccbbbbcc8fcb1188................
        ....................8bbccbcf8ccbcccbbccffcccbb188...............
        ...................8bcbcbcb8ffcccccccc8fccccccb188..............
        ...................8cbccccc8ffffffffffff88cccccb18..............
        ..................8bccccc8ffccccbcbcbbcdff8ccccbb8..............
        ...................8cccc8ffccccccbbbbddbbff8ccccc8..............
        .....................888ffcccccbcdbddbbbbbf888888...............
        ........................8cccbcbcbbbdbbbbbbfffffff...............
        ........................8ccbcbcbcbbbdbbbbb8ffcccb...............
        ........................8cccbcbcbbbdbbbbbb8ffcccb...............
        .........................ccccbcbccbbdbbbb8f.fcccb...............
        ........................8f8ffffffffffff88f...cccb...............
        ..........................f8888888888888f....cccb...............
        ..........................ffffffffffffff.....cccb...............
        ........................eeeeeee4eeeeeeeeee...cccb...............
        ........................eeeeede4d5d5deeeee...fccb...............
        .......................eeeee45e45d5d5d4eeee..fccb...............
        .......................eeee45de4d5d5d5d4eee..cccb...............
        .......................eeeeed5e45d5eed5eeee.ffffb...............
        .......................eeee45de4d5dee5d4eee.fffffc..............
        .......................eee4de5ee5d5eeded4eeffffffc..............
        .......................ee4e4d4eed4dee4d4eeeffffffc..............
        .......................eee4e4eee4d4eee4e4eefffffff..............
        .......................ceeeeeeeee4eeeeeeeecfffffff..............
        .......................ceeeeeeee4e4eeeeeeec.ffffff..............
        .......................cffffffeeeeeeefffffc..ffff...............
        .......................cbccccceeeeeeeccccbc.....................
        .......................bccccccfffffffcccccb.....................
        .......................cbcccccc....ccccccbc.....................
        .......................bccccccc....cccccccb.....................
        .......................cbccccc......cccccbc.....................
        .......................bcccccc......ccccccb.....................
        ......................ffffffff......ffffffff....................
        ......................ffffffff......ffffffff....................
        .......................ffffff........cfffff.....................
        .......................bffffc........cffffb.....................
        .......................cffffc........cffffc.....................
        .......................ffffcc........fcffff.....................
        .......................fffccf........ffcfff.....................
        .......................ffffff........ffffff.....................
        .......................ffffff........ffffff.....................
        .......................ffffff........ffffff.....................
        .......................ffffff........ffffff.....................
        .......................ffffff........ffffff.....................
        .......................ffffff........ffffff.....................
        .......................ffffff........ffffff.....................
        .......................cccccc........fccccc.....................
        .......................cffffc........cffffc.....................
        ......................fcffffcf......fcffffcf....................
        ......................cfffffcc......ccffffcc....................
        .....................ffffffffff....fcffffffcc...................
        `)
    pause(1000)
    adventure.addToTextlog("Press (A) to join the hard & terrifying fighting.")
    adventure.addToTextlog("Press (B) to go with the first knight.")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you go with him...")
        adventure.addImageToTextLog(assets.image`goblin`)
        adventure.addToTextlog("You were badly injured...")
        info.changeLifeBy(-2)
        quest21()
    } else {
        adventure.addToTextlog("you actually leave this time..")
        adventure.addToTextlog("you start traveling...")
        quest3()
    }
}
function quest5 () {
    adventure.addToTextlog("you enter the castle.")
    adventure.addToTextlog("guards come and take you somewhere...")
    adventure.addImageToTextLog(assets.image`gaurd`)
    adventure.addToTextlog("they took you to the throne room...")
    music.play(music.createSong(assets.song`quest_from_the_king`), music.PlaybackMode.InBackground)
    adventure.addImageToTextLog(assets.image`king1`)
    adventure.addToTextlog("you were told by the king to go forth and fetch him a banana or two or three or four or all of them from the market.")
    pause(1000)
    adventure.addToTextlog("You were catapulted out of the window towards the market.")
    pause(100)
    adventure.addToTextlog("you landed right in the middle of the market.")
    adventure.addToTextlog("press (A) to buy some bananas for the king.")
    adventure.addToTextlog("press (B) to leave without getting bananas for the king.")
    pauseUntil(() => controller.A.isPressed() || controller.B.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you got bananas  for the king and then some more over and over again.")
        adventure.setScoreOverride(adventure.Currency.Coins, 0)
        adventure.addToTextlog("you got very hungry...")
        info.changeLifeBy(-1)
        quest7()
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("you bought a sword and left.")
        adventure.addImageToTextLog(assets.image`swordd`)
        adventure.setScoreOverride(adventure.Currency.Coins, 2)
        quest7()
    }
}
function quest6 () {
    adventure.addToTextlog("you see a ship.")
    adventure.addImageToTextLog(assets.image`ship1`)
    adventure.addToTextlog("press (A) to board the ship.")
    adventure.addToTextlog("press (B) to sit down and wait forever...")
    pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you got on the ship.")
        quest9()
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("you sit down & wait forever.")
        game.setGameOverMessage(false, "you Died of boredom...")
        game.setGameOverEffect(false, effects.melt)
        game.gameOver(false)
    }
}
function lorestart () {
    adventure.addImageToTextLog(assets.image`dice`)
    adventure.addToTextlog("press (A) to read lore. press (B) to start the game.")
    pauseUntil(() => controller.B.isPressed() || controller.A.isPressed())
    if (controller.A.isPressed()) {
        adventure.addImageToTextLog(assets.image`scroll of lore`)
        pause(100)
        adventure.addToTextlog("This game is set in medieval times. the character you play as is a warrior without a sword.")
        pause(852)
        adventure.addToTextlog("In this land there are seven kingdoms consistently battling each other for power. These kingdoms are:")
        pause(3900)
        adventure.addToTextlog("The seafaring kingdom, ruled by the pirates and Queen Gráinne Mhaol.")
        pause(750)
        adventure.addToTextlog("The orc kingdom, ruled by the orcs and king Ocrasged.")
        pause(750)
        adventure.addToTextlog("The troll kingdom, ruled by the trolls and king Grollis.")
        pause(750)
        adventure.addToTextlog("The dark kingdom, ruled by the dwarfs and king hertrik.")
        pause(750)
        adventure.addToTextlog("The forest kingdom, ruled by mushroom folk and Queen Iðunn.")
        pause(750)
        adventure.addToTextlog("The war kingdom, ruled by knights and king Jerun.")
        pause(750)
        adventure.addToTextlog("&")
        adventure.addToTextlog("The sky kingdom, ruled by birds and queen laxe.")
        pause(1300)
        adventure.addToTextlog("The war kingdom fights everybody except the sky kingdom and the dark kingdom.")
        pause(1600)
        adventure.addToTextlog("The sky kingdom mainly stays in the sky and mountains but sometimes invades the land around the mountains.")
        pause(2000)
        adventure.addToTextlog("The orc kingdom and the Troll kingdom attack anybody they come across.")
        pause(1000)
        adventure.addToTextlog("The dark kingdom took the safer strategy and gives the kingdoms weapons in turn for land, except for the orc kingdom and troll kingdom, because they have a grudge against them. The dark kingdom mercilessly attacks the orc kingdom and troll kingdom.")
        pause(10000)
        adventure.addToTextlog("The seafaring kingdom attacks everybody near the coast.")
        pause(1000)
        adventure.addToTextlog("the forest kingdom attacks orcs, trolls, & goblins that come into their forests.")
        pause(1000)
        adventure.addToTextlog("your character lives near the sky and forest kingdoms on the dark kingdoms land and on the seafaring kingdoms land")
        pause(1300)
        adventure.addToTextlog("starting game...")
        pause(100)
        adventure.addImageToTextLog(assets.image`remove text`)
        info.setLife(3)
        adventure.setScoreOverride(adventure.Currency.Coins, 1)
        quest1()
    } else if (controller.B.isPressed()) {
        adventure.addImageToTextLog(assets.image`remove text`)
        info.setLife(3)
        adventure.setScoreOverride(adventure.Currency.Coins, 0)
        quest1()
    }
}
function quest7 () {
    adventure.addToTextlog("you met back up with wandering knight.")
    pause(100)
    adventure.addToTextlog("you and the knight were ambushed by a goblin")
    adventure.addToTextlog("press (A) to fight")
    adventure.addToTextlog("press (B) to hide")
    adventure.addToTextlog("Press (arrow key) to run away")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you decided to fight")
        pause(100)
        info.changeLifeBy(-1)
        pause(100)
        adventure.addToTextlog("you killed the goblin.")
    } else if (controller.B.isPressed()) {
        adventure.addToTextlog("you hid behind the knight.")
        adventure.addToTextlog("the knight leaves you and kills the goblin.")
    } else {
        adventure.addToTextlog("you ran away...")
        adventure.addToTextlog("you fell off a cliff onto a pirates boat.")
        adventure.addImageToTextLog(assets.image`ship1`)
        quest9()
    }
}
function questsplit2 () {
    adventure.addToTextlog("you keep going forward.")
}
let varrible1 = 0
adventure.clearTextLog()
varrible1 = 0
lorestart()
