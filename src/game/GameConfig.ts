// Last review: 08-10-2023

import { buildChooserScreen } from "./Chooser";
import { buildLevelScreen } from "./Levels";
import { buildStoreScreen } from "./Store";
import { buildHelpScreen } from "./Help";
import { buildSplashScreen } from "./Splash";
import { GameCfg } from "../jetlag/Config";
import { ErrorVerbosity } from "../jetlag/Services/Console";

/**
 * GameConfig stores things like screen dimensions and other game configuration,
 * as well as the names of all the assets (images and sounds) used by this game.
 */
export class GameConfig implements GameCfg {
  // It's very unlikely that you'll want to change these next four values.
  // Hover over them to see what they mean.
  pixelMeterRatio = 100;
  defaultScreenWidth = 1600;
  defaultScreenHeight = 900;
  adaptToScreenSize = true;

  // When you deploy your game, you'll want to change all of these
  canVibrate = true;
  forceAccelerometerOff = true;
  storageKey = "com.me.my_jetlag_game.storage";
  verbosity = ErrorVerbosity.LOUD;
  hitBoxes = true;

  // Here's where we name all the images/sounds/background music files.  You'll
  // probably want to delete these files from the assets folder, remove them
  // from these lists, and add your own.
  resourcePrefix = "./assets/";
  musicNames = ["tune.ogg"];
  soundNames = ["high_pitch.ogg", "low_pitch.ogg", "lose_sound.ogg", "win_sound.ogg", "slow_down.ogg", "woo_woo_woo.ogg", "flap_flap.ogg"];
  imageNames = [
    // The non-animated actors in the game
    "green_ball.png", "mustard_ball.png", "red_ball.png", "blue_ball.png", "purple_ball.png", "grey_ball.png",

    // Images that we use for buttons in the Splash and Chooser
    "left_arrow.png", "right_arrow.png", "back_arrow.png", "level_tile.png", "audio_on.png", "audio_off.png",

    // Some raw colors
    "black.png", "red.png", // TODO: stop needing these!

    // Background images for OverlayScenes
    "msg2.png", "fade.png",

    // The backgrounds for the Splash and Chooser
    "splash.png", "chooser.png",

    // Layers for Parallax backgrounds and foregrounds
    "mid.png", "front.png", "back.png",

    // The animation for a star with legs
    "leg_star_1.png", "leg_star_2.png", "leg_star_3.png", "leg_star_4.png", "leg_star_5.png", "leg_star_6.png", "leg_star_7.png", "leg_star_8.png",

    // The animation for the star with legs, with each image flipped
    "flip_leg_star_1.png", "flip_leg_star_2.png", "flip_leg_star_3.png", "flip_leg_star_4.png", "flip_leg_star_5.png", "flip_leg_star_6.png", "flip_leg_star_7.png", "flip_leg_star_8.png",

    // The flying star animation
    "fly_star_1.png", "fly_star_2.png",

    // Animation for a star that expands and then disappears
    "star_burst_1.png", "star_burst_2.png", "star_burst_3.png", "star_burst_4.png",

    // eight colored stars
    "color_star_1.png", "color_star_2.png", "color_star_3.png", "color_star_4.png", "color_star_5.png", "color_star_6.png", "color_star_7.png", "color_star_8.png",

    // background noise, and buttons
    "noise.png", "pause.png",
  ];

  // This is where we tell JetLag about the functions we wrote for configuring
  // each level.  You probably don't want to change these lines.
  levelBuilder = buildLevelScreen;
  chooserBuilder = buildChooserScreen;
  helpBuilder = buildHelpScreen;
  splashBuilder = buildSplashScreen;
  storeBuilder = buildStoreScreen;
}
