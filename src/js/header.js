var prevScrollpos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if(window.innerWidth > 870){
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.position = "fixed";
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-110px";
                }
                if(currentScrollPos > 100){
                    document.getElementById("navbar").style.backgroundColor = "rgba(233, 130, 131, 0.9)";
                }
                else{
                    document.getElementById("navbar").style.backgroundColor = "rgba(37, 43, 73, 0)";
                }
                prevScrollpos = currentScrollPos;
            }
            else{
                if(currentScrollPos > 100){
                    document.getElementById("navbar").style.position = "fixed";
                    document.getElementById("navbar").style.backgroundColor = "rgba(233, 130, 131, 0.9)";
                }
                else{
                    document.getElementById("navbar").style.backgroundColor = "rgba(37, 43, 73, 0)";
                }
            }
        }