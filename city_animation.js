//variables
    {
var suny = 108;
var sunwh = suny-8;
    var x = 46;
var y = 33;
var x2 = 117;
var y2 = 33;
var x3 = 200;
var y3 = 50;
}

//functions
    {
        var road = function () {
            noStroke ();
            fill (110, 110, 110);
            rect (0,551,601,55);
            //white lines
            var whitey = 573;
            fill (255, 255, 255);
            rect (10,whitey,33,7);
            rect (60,whitey,33,7);
            rect (110,whitey,33,7);
            rect (160,whitey,33,7);
            rect (210,whitey,33,7);
            rect (260,whitey,33,7);
            rect (310,whitey,33,7);
            rect (360,whitey,33,7);
            rect (410,whitey,33,7);
            rect (460,whitey,33,7);
            rect (510,whitey,33,7);
            rect (560,whitey,33,7);
        };
        var greenhouse = function () {
            fill (174, 204, 165);
            rect (112,401,153,150);
            stroke (161, 150, 119);
            strokeWeight (20);
            triangle (184,301,90,401,288,401);
            noStroke ();
            rect (113,391,153,26);
            noStroke ();
            //windows
            strokeWeight (1.5);
            stroke (0, 0, 0);
                //circle
                fill(228, 239, 240);
                ellipse (187,369,30,30);
                //4 square
                rect (125,409,25,25);
                rect (162,409,25,25);
                rect (196,409,25,25);
                rect (231,409,25,25);
            //divider
            stroke (161, 150, 119);
            strokeWeight (4);
            line (115,450,262,450);
             strokeWeight (1.5);
            stroke (0, 0, 0);
                //2 squares + FUNCTION
                var twowindows = function (x,y) {
                    rect (x,y,38,62);
                };
                twowindows(121,466);
                twowindows(216,466);
               
                //house
                fill (161, 150, 119);
                rect (169,504,38,47);
                arc (188,506,37,39,180,360);
                fill (0, 0, 0);
                ellipse (198,527,6,6);
        };
        var trees = function () {
            var treeX=381;
            var treeY=455;
            fill(140, 111, 84);
            rect(treeX,treeY,16,97);
            fill(96, 143, 91);
            triangle(478,525,300,523,398,370);
            triangle(466,484,313,483,386,370);
            triangle(450,441,323,443,385,364);
            triangle(437,405,340,400,389,333);
            fill(158, 141, 100);
            rect(23,499,10,52);
            fill(54, 163, 70);
            ellipse(30,461,58,100);
        };
        var redhouse = function () {
            noStroke();
            fill(173, 85, 85);
            rect (479,399,150,150);
            //white line
            fill(250, 250, 250);
            rect(475,465,131,4);
            //black squares
            fill(0, 0, 0);
            rect(479,469,8,10);
            rect(493,469,8,10);
            rect(509,469,8,10);
            rect(525,469,8,10);
            rect(539,469,8,10);
            rect(552,469,8,10);
            rect(566,469,8,10);
            rect(580,469,8,10);
            rect(594,469,8,10);
            //yellow squares
            fill(237, 186, 33);
            rect(486,469,8,10);
            rect(501,469,8,10);
            rect(517,469,8,10);
            rect(532,469,8,10);
            rect(546,469,8,10);
            rect(559,469,8,10);
            rect(573,469,8,10);
            rect(587,469,8,10);
            //bottom rectangle
            fill(247, 222, 172);
            rect(479,533,123,18);
            //windows
            fill(195, 237, 250);
            stroke(0, 0, 0);
            strokeWeight(3);
            rect(490,484,25,35);
            rect(526,484,25,35);
            rect(565,484,25,35);
            rect(490,418,25,35);
            rect(526,418,25,35);
            rect(565,418,25,35);
            //roof
            fill(107, 66, 58);
            quad(619,402,468,400,495,328,595,330);
        };
        var hotairballoon = function () {
        
    noStroke();
    var hab =0;
    fill (222, 62, 62);
    ellipse (458,469,106,115);
    quad (446,hab+544,hab+473,hab+544,hab+503,hab+487,hab+422,hab+509);
    fill (173, 156, 114);
    rect (446,559,29,24);
    stroke (0, 0, 0);
    strokeWeight (1);
    //first group of strings
    line (447,543,451,557);
    line (454,543,453,558);
    //2nd group
    line (472,543,470,557);
    line (466,543,468,558);
    //middle
    line (460,543,461,558);
    //animation
    hab++;

        };
        var nightgreenhouse = function () {
            fill (174, 204, 165);
            rect (112,401,153,150);
            stroke (161, 150, 119);
            strokeWeight (20);
            triangle (184,301,90,401,288,401);
            noStroke ();
            rect (113,391,153,26);
            noStroke ();
            //windows
            strokeWeight (1.5);
            stroke (0, 0, 0);
                //circle
                fill(252, 245, 182);
                ellipse (187,369,30,30);
                //4 square
                rect (125,409,25,25);
                rect (162,409,25,25);
                rect (196,409,25,25);
                rect (231,409,25,25);
            //divider
            stroke (161, 150, 119);
            strokeWeight (4);
            line (115,450,262,450);
             strokeWeight (1.5);
            stroke (0, 0, 0);
                //2 squares + FUNCTION
                var twowindows = function (x,y) {
                    rect (x,y,38,62);
                };
                twowindows(121,466);
                twowindows(216,466);
               
                //house
                fill (161, 150, 119);
                rect (169,504,38,47);
                arc (188,506,37,39,180,360);
                fill (0, 0, 0);
                ellipse (198,527,6,6);
        }
;
        var nightredhouse = function () {
            noStroke();
            fill(173, 85, 85);
            rect (479,399,150,150);
            //white line
            fill(250, 250, 250);
            rect(475,465,131,4);
            //black squares
            fill(0, 0, 0);
            rect(479,469,8,10);
            rect(493,469,8,10);
            rect(509,469,8,10);
            rect(525,469,8,10);
            rect(539,469,8,10);
            rect(552,469,8,10);
            rect(566,469,8,10);
            rect(580,469,8,10);
            rect(594,469,8,10);
            //yellow squares
            fill(237, 186, 33);
            rect(486,469,8,10);
            rect(501,469,8,10);
            rect(517,469,8,10);
            rect(532,469,8,10);
            rect(546,469,8,10);
            rect(559,469,8,10);
            rect(573,469,8,10);
            rect(587,469,8,10);
            //bottom rectangle
            fill(247, 222, 172);
            rect(479,533,123,18);
            //windows
            fill(255, 243, 135);
            stroke(0, 0, 0);
            strokeWeight(3);
            rect(490,484,25,35);
            rect(526,484,25,35);
            rect(565,484,25,35);
            rect(490,418,25,35);
            rect(526,418,25,35);
            rect(565,418,25,35);
            //roof
            fill(107, 66, 58);
            quad(619,402,468,400,495,328,595,330);
        };
        
}

draw = function() {
    noStroke ();
    background (218, 240, 236);

//sun animation
    {
    fill (252, 245, 182);
    ellipse (324,suny,sunwh,sunwh);
    suny += 1;
    sunwh +=0.3; }


// clouds
    {
    noStroke();
    var leftX = 470;
    var rightX = 196;
    fill(255, 255, 255);
    // left cloud
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX+62, 150, 70, 60);
    ellipse(leftX-62, 150, 70, 60);
    // right cloud
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX+62, 100, 70, 60);
    ellipse(rightX-62, 100, 70, 60);
}

//animation
    //night animation
    if (suny > 680) {
    background (0, 0, 0);
        {
        fill (252, 245, 182);
        ellipse (324,suny,sunwh,sunwh); }
     //moon
        {
       fill (252, 245, 182);
     ellipse (528,70,100,100);
      fill (0, 0, 0);
     ellipse (490,70,100,100);
     }
    //shooting star
        {
           fill(255, 254, 242);
        arc(x,y,56,50,55,60);
        x+=0.8;
        y+=0.9;
    
        arc(x2,y2,56,50,55,60);
        x2+=1.2;
        y2+=1.2;
        
        arc(x3,y3,56,50,55,60);
        x3+=1;
        y3+=1;
        }
    road ();
    nightgreenhouse();
    trees();
    nightredhouse();

        
}
    //day animation
    else if (suny < 680) {
        road();
        greenhouse();
        trees();
        redhouse();
        hotairballoon();
    }
};

