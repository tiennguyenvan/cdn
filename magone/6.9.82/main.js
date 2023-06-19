
window['main_js'] = function () {
    function trans(id) {
        var html = $('[data-l10n="' + id + '"]').html(); if (typeof (html) == 'undefined' || html == '') { return id; }
        if (typeof (arguments) != 'undefined' && arguments.length > 1) {
            var vars = html.split('$$'); html = ''; for (var i = 0; i < vars.length; i++) {
                if (vars[i] && !isNaN(vars[i]) && typeof (arguments[Number(vars[i])]) != 'undefined') { html += arguments[Number(vars[i])]; } else {
                    if (i > 0 && (!(vars[i] && !isNaN(vars[i - 1]) && typeof (arguments[Number(vars[i - 1])]) != 'undefined'))) { html += '$$'; }
                    html += vars[i];
                }
            }
        }
        return html;
    }

    // andSelf was deprecated since jQuery 3.0
    $.fn.andSelf = function () {
        return this.addBack.apply(this, arguments);
    }

    /* OBFUSCATE FROM HERE */
    // replace font icon to google icon
    $(document).find('i[class*="fa"]').each(function () {
        let classNames = $(this).attr('class');

        classNames = classNames.split(' ').map(e => {
            e = e.replace('fa', 'gi');
            e = e.replace('gice', 'face')
            return e
        });

        $(this).attr('class', classNames.join(' '));
    })

    /*MISC*/
    var FIREFOX = ($('.is-firefox').length && $('.is-firefox').css('display') != 'none');

    /*TEMPLATE GLOBAL VARIABLES HERE, USER CAN NOT CHANGE*/
    var DIVCLEAR = '<div class="clear"></div>';
    var ICON_MARKER = '##';

    // don't change order of list, or you must keep longer code on top, shorter in bottom
    // and also keep overwrite rule. example: >:) must above :)
    var EMOTICONS = {
        /* penguin => <(&) */
        '&lt;(")': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABC1BMVEUAAAAlKjUkKjQRExkKCw8jJzMLDBAKDA8CAgNXQEENDhIcICoRFBoDBAYFBwhETGQ/R10GBwnoiTLlhzHWcSICAgQRExgkKjQhJTEOEBUAAAAAAAAAAAERExk+RVxAR15ASF8oLToQEhYCAwUxMjX1mDixYyDigi6ympPM0Nrcdybigi7phCw9RFs+RVv5+frw8fT09ffg4efp6u73+Pk2PFDQ0tnk5uwqLz4aHCPt7fDHydHb3eQSFBrV1+CQlKDY2uK3ucC/wcs6PkmenqXTdyarrrceIS1FSFExNkhRVGJgYWVfY3MzNkHqiTDcn3bTlmwxMjd5e4AoHhfg19aFiJByTze2aCqrck7A24KcAAAAL3RSTlMADQQe/vxXSuAw7L6Z88qkdLshzZTpd2XqFZkpPYWz/OWq8tPjcdo7yqKz79Xo6JD70PIAAAG5SURBVHjaZdLTohtBAIDhzCI2jy21HawtRTp+/yfpxPpvv91xah1IF454/qiQBqmDjou80qUpfPF435iiqojzFLXI7GGm5AeuLYq2G/ilzB6eqC6GWq9HIHbVk10D5b430GEyJPrA65fBDrLZd6+nSx8frt7z3rPsHvYNSxuH4USzjP4enramukwojomsT1unO3hWMiND/pxMPmUjMktn2wbOOTWwHExzrEDlzsHWjBe8mXiWsUAvUfkLdmWgIqqKbWCZ0GTDsRVVrIAlVi/jeGARDSKEINRkaRDHl9WF5a4Uk7cJRMI8pMk2bypXuZkxFdE0hy61f/OougpnihWGYu5PzJm+DqktQlAfclz8N0exqnC1vC9tUICSn69xCp2VuTbLmRmizZ/SsJUpm9dMChRuMmx2qmtbc3p8ls3cFECKaXcYUFMjGaLVj3Kk1gDT6SwfRJv7wgQK8/8gwV9ce/vGbhOJKqJRk5LbnTtL523HkImmzY8vn942qneR5RgYG44V3e1Z/f7hO9Almh58P9zXt+2xMRqFP79Pz89Pvz/haNR43P6x2Xh5fWvm6GE2315fGs3Fr/8BSVtcP+HbYZkAAAAASUVORK5CYII=',

        /* putnam */
        ':putnam:': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAhFBMVEVHcEwuUpswVaApS5AqTJAsT5YrT5YlRogmR4ovVaA+Z7gpTJEmR4onSIopTJEuUZg/aLlGb8FCarwqTZMwVaA5YbEsT5dSe81BartPeco2Xq0zWaZHcMIzWqhOd8hLdMY9ZrhJcsVBar1Ufc9Od8k6Y7Q0XKs3X68yWKVGb8JEbcBReszJRRq9AAAAIHRSTlMANeqbH1P3BxL+cj9lecMqSNKNg9Hjtvim6sebvfLx6S8tq2wAAAEKSURBVHjajc4FwqYgEIDhMQe7u7vuf7+FL5F/67F9FYD/QTzf91BVEcWCfhgUWVbkYWDmqpDqdnorLhN4Jk2ckG9Sd2uDxsdwvngB4Rqp56eLblRrctEc5ruAW24wCA7/G8cfkRu3PwRnyMVTlOMnJqPgTCSgEKiqH0UlrVhpNFpJ/0NJwFoSVqNNbIuCUG2ygwBEWZe7koDnRh4wJJI3Lm27S4CogFIEjBav20dsS2w8O212eFBTvlrsjSLvLDKSvH40GgAiqHb6ih4XY0KfFY0AvqKzP+i6YRhsHZgarvaKlrwzsm3Zjk2A0gzdgSfFYM1Q4IO4DsKT5LLxdAu+VPzeOq6uKwh3vwBP1DVnDxxxogAAAABJRU5ErkJggg==',

        /* poop */
        ':poop:': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABEVBMVEUAAABaOiFDKxdGKhZPMhtRNB5OMBpCKRZNLxlfPSQ+JxVIKxdkQCZDKhZhPyZSNR93TzBPMRpFKhZQMhw7JRM/JxRwSi1PMRpiPyZhPSV1TTB8UjN/VDRmQyhdPCJqRClXNR5BKBN3TjBUNh9hPiRpRSpaOSF8UTJFLBluSC2JWjeTYTxOMhxkQijW1+OOXzxLLxmAVDSEVjWeaUKqcUaaZT+jbENySy3x9Pg7Iw95cXS8vsfq7POCfISMaVKQd2jLxsX3+/5lanONf3ptV0piVlOzeE2mq7CmnZxHMydwZGm8s6+ypqGglJBTWWHj5u+alp7d4OtSOy5fRDjc3O52ZmLNy9OdoqmjnJwbIy4fJzLM4RJxAAAAIXRSTlMACeYtE0yY+V3luDr273v4a4UcxtNwntjBy7nyvtLS+a19sKb4AAAB4UlEQVR42nWRA7rsMBhAO7b93LBJ7V7bGmv/C3mZXut8KE7yU3pP4kc3LX1Dov6TVr9Tv7hp//76at1xPR/8+Vp2bZWHqPFVzEy2B6Gm5LKlxCdZLTNMICQIlfv5DzpVAKavxnD6N/s+b56EZuAJAl91wIfEpQoJHVM1uUMBw6jXfKOyrZxsEaQjRKBIDJOp15gF4NhYk2MszVLkdvq1GOqeu6ZNMUFMRGUhar2E7SDuHtwc3u4HQeDt3x7eHJh08Bw3q/N94yg6OjTPz/cPxYuxz9m/p14bKLyLLo53ogPfPYh2jhfRHaXl0qPM1NBy9361HZ3Yzkm0t77fvWQU5WOXzle07Qdx0zgF4NTYOb542MaAxDLTr8ny1dAYGXsQALgnXoZjrMedZgpMh4qsnG2fKVDXyeblSoNWcSMHIaWhTix5a0tWLMtStsSLQCtUE1J5sw1OQwwVRfzbKEuDBGFcrkqIcdcLXJ+P9/a2r6+vt/euMKC2TQEuSDUdCOt5wWRnagimOxPVd33TAZhILagzylU/cGbzXcF8xkUcVThUkzJJTawKM2CD05PLy5NT23RswLBOtKIkZYpJxdI0CAkWMKYjQiDUrFzcTKLUyRbbyUpOVgS5XKWSTCbbxU5T+g89/lfg6IsUjgAAAABJRU5ErkJggg==',

        /* upset => >:o */
        '&gt;:o': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABPlBMVEVHcEzIJQDQLwD3XADePwDxVADLJgDhQgDxVQD5YAD8ZgD6YgD2WgD2XAD8ZAD3XQDyVADSMADPLADHJADRLwDKJwDJJgD5YAD3XgDfPgDlRQDqTADzVwDxVQDVMwDGJADLKQD/cAD/dgH+agD8ZQD/hArfPwD/kxz/ewP/qDX/jRT+hw//ninpSgD1lS7PPwDZQQDN2O2zNgD/mSPtbgz/gAb/oy7WNQDn7fnfTwHV3e6yvtrlWwnwUgD6YAApL1A6M0HxdAr8ojRkPECJXFmgMQHHwcTUhy/OciUyO2Lx9fz2WwDOxsXtgiK9TwbQUgTg5/SntNHdz8/eaCp6REzTfFPEiHLFTRlhHiK3eWSbVRmgm6bwfxyFTyO0VxO3tL2ocTC5dzW3aB8+IiKlorrIaSr6/P/ft6Wlo7obGjIiJd2tAAAAIXRSTlMAKv5qDjYCFinR/f1ZnujM41lqNtHozrKy0J7M7OyynrJ76npZAAAB8ElEQVR4XmXT5XLbQBSA0ZUsaWXHrmOowyBmNDNTmJlTfP8X6N06TTzN90eaObpXs5oR+ojDPMvymEOfw/FE8guUTMTxf8REojFJECFBikUjzLzxSzFB1IsKVNRFIbbEfxgblURdsUwNMi2lKEpR9n0OrAiUz9t2Pg9M9G2WWZZnZpcge6by8uy9kQVBn5kBzVQXFiLEMCxVTFOzSz3XMNxeydZMU4HFGDAOg92updnGvue63r5ha1a3C6NxhLiELOgNz682Cg3fdX24VH2voQtygkM4CagXDochPOC6AOHwsKADJjHiFwEV66bTeX246/XuHl47v28sBXCRR+y6TE553562nwzoCW7uyUnldRaxGy0JRl/a084YzlIad6btFxiUWhssrG3JRCfPYy1PGj9PiMktWIvXdomKhcn3tyYFkdjuGkbcapPoweD2cTTa2xuNHm8HB8SaqxxCKQe02j8OKjs/oJ1KcNyvgjkp8vlWQMN+vfYPa/V+CLaCEZRWnebw6ltwVNmBKkfBr6th01HTiMRsqk54Nj95FjrqJgMEUVnVG9SD2slP6KQW1AeemqXQW5ls+fL64vy0AZ2eX1xflrMZ9B61Tfvqez69TaG5mHSOpst/o+lcmgGYD6e2cl+h3FYKo89xmMpkqPnf4Q+iuW2XBKq3JwAAAABJRU5ErkJggg==',

        /* grumpy => >:( */
        '&gt;:(': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA/1BMVEUAAAD/oA3/jwP/wiH/mwz/dgD/lAb/hQD/txb/shX/hwD/uxr/uhn/vh7/uhr/tBX/ngf/iwH/hwD/gwD/mQD/xij/vh7/wSD/vR7/uRn/rRD/iwH/gwD/gQD/0jb/xyf/1Dz/2EP/5GD/52n/3Ez/7Hn/wSD+6HL/ngb/yyz/3lL/uBj/rxL/lwP/zjH/4Vj/7oL+pQz/jQHsrCndfgH+qw4pLUz31GfkiwnKjiHMr0ZPFAv/kwJpOgrtu070wD33zlXXeAGih0IvOWNERlB+UhDomRmVUwaPezkdHDKLej2vnlPiyFjvuiS2ihqbXBCVVhzgpCuwYQGxYgEsJTGYLWCeAAAAHnRSTlMAKRXQDgI20Bae/jZZ487szllq6ALsarKyauOysp7602q7AAAB1klEQVR42mWRA5olMRhFk2ezjaBsu21rZva/lvlTLZ2HwvnujdAnKz08HOLeCvpNb9RvjldXx83+qPdDtdaa1COEMUI82lxrfXV4nXqMKzWceXQdf7ph0yRcsXwJ8C2FE7M5/Mg1TcZByTWgOTObb9nWxpvTdVXV9Te70arlJoVO4dQaYaGZbtZrmJhMEUFVDQBVFVGFmROxopHmwWREMKgRUZiUp40Qavc/WvXDIDjUP3r7bdSYgIzjo2NZPTzJ85NDVT4+imOQkwbCY0pYnCRJcVkkeS4u8BAzQscYdabUY+yovLj6c1LkeXHy9+qgPGLMo9MOSM0kjF9n2c3psa4fn/7Lbq45J6YGEm9p1CT8NjvL7mTYgju4ueXEo9oWRo2ZLWx1fnZ+LwH3cFMRk2r2rAFLcYT1qtNKsQAFbjzhHFgKmodgtbfTZPATleDCOULQC1boh8eLg4OLxwehwEErsHDDFHR5sFdzUIJKQ3eBBK1t1wjT9Om5fInjl/L5KU1Dw91uoRrc3TeMMHScFD6OE4aGsd/F6JV2pxu5rvGB60bdDvoA7wyi/X23Zn8/Guxg9Em7tegOBlHNYNBdtNB3GvPd7hLo7s4b6DftBu50cKONPvgPOK5ZkD4VK9YAAAAASUVORK5CYII=',

        /* heart => <3 */
        '&lt;3': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAtFBMVEUAAAC2ChLsIiWxCxPdGh7KERfnHiL9PDr7NzbXGB72Li+4DhW9DxauCxPOFRv2LS70Ky34MTLCERfMFRvKFBq8Dxa9Dxb6Njb4MTL3Ky3pIiXaGh/dHCC6Dxa5DhatCxOfCBHwJynvJij2LzD2LzDxKSvUGB6xDBT/QT//RUL/Pjz/Ojn/Nzb/SEX/T0r+MTH3Kiv/NDT5LC3jHCH8Ly//S0fqISTtIiX1JyryJSjUFxzvIybGuTxuAAAAKHRSTlMABUUWIQku9ew+9mSTNfi0otpTxOTc8+Lphdur87+2V55rYs/j7ceGvksa8QAAAQ1JREFUeNqFzQUO40AMhWHPhBnLXaYwc+5/r01c5k9k6Zf84DOOp5QlgAhLKc+dE6GGKAgrk4cJb64EQTToqf0Q42TiWRSAWv58x+JPQHRqyP/FsnPDupZwz/DqgzjYbIL6yDPJPLL24yNfEC73b3b+KvsX3uWSJYzeUxglOQyeCP/wU2S3UfhEtGWmSHZF9ESxIzBRmjR/kDY2zJi/WfogcxhA9r6o7mR7Gw44tcyKG1mpEjhinSa70cxPj4jktt2V1tXgiqK3/VmrK3CFcOrQjkftgINXmC9l06Jm+MrALaK5ZYPKxXHwdrZEy2/wiKjD3PR/5CHh7FRx8BltMQw4+JSyxMHnuO/fbwb/AwMhR10qYBbiAAAAAElFTkSuQmCC',

        /* shark */
        '(^^^)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABR1BMVEVHcExigI56maVLZHA2Tlp0kp9ykJ12lKGfusVIXmhzlaOHp7RDX203TllUcX54kp20z9hCVl9+n61pipmbt8Nkf4pPa3ict8ONqrdXeYqbtsGUrrpwjJhCW2ePsL2Ko69sipZbeYdUb3w9VWCuyNJti5mEoayKpbKCoKx3kZ6HprJQY2tSbXmUr7uQq7emw859nquKqLSCnaqVsb0gMj1JZXJcfY2Koq6QqLFvkJ1adH63ztZRZW1zkp94nKp3kJqSrLmqwct4nKxjipulwct3mqdggI59hIyitsCVrbaDnag9VWBnhJKFn6uUsLx6maaGp7WpwszF19/Q4+rO4OebtsHT5ezI2+Kwx9DL3eRcdH+90tq5z9jB1NykwMrY6vCNrLjW6O6Ys760y9Ta7PKFo7CzwMacoKeqsrm2x8+4y9RES0+Io64fhwcsAAAAUXRSTlMAErQpEP0DCv7hIX5NGG36p1VpmcD4MN46QGuc+jom8Gd7XW6TYdbDnDSoyeCzU3/43+bsR5HI9vyFyZe4zFDh0vK920XknM7u5fCh7Pz+/v6C6DR1AAABnUlEQVR42nXRZXfCMBQG4GKlaHGGDNiAubu7S1mSuuFM///nNWzdwtn6fujJuc+5N01C/Q1dCp2d5/6p0xRVCq0+Nba8RNVfusgv12Kx2H4ty7X6volfGVtO3TKmHYbrF3M2LS2uC+z7DgBWXbDCtZ5WEv6hBecEoEvGgBcR4iWtazJDTbowzgk6ajd7vbaIv72mqGiyKbQaSdw7DSCPpMHLy0Bq4zSbSO50uL7vKhyhxhZPu2/Pz69Q4RESRcwilEGnkd7cwP+aL1zfAFnu6oakIIS9zUPh+zg07ZpdyocKJxwDdKgMWdQ+Ri6CKjAtdjora0PmzYdxwvwpnUl6g4mUqVnbI52dJDCYBW58Old9Ckg8bzSiBM6WjzNfq8whUBTjkcTxQNV+nFwZSsZ2mMDIht9eelahpO0QnWTCdxDK7P3oU9P2kCnttTwZIcy163bPhI6C1vA6J29P0CONnuhe2rdy6a5U1oT1OjZSKW/8IF30Fdm1mYRtRCyeV1U1SjnEE1AXMk7onVc3aSeMBBY8DoRvMU45Jl79GfoJvtNaFVod0+0AAAAASUVORK5CYII=',

        /* devil */
        '3:)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABYlBMVEVHcEy1ddmPXa0pLTRQHXRPG3U4Ik5NGXNLF3A9HlhYJXtNVV56PaE1OUJQHHRMGXGycdahYMWvb9OxcdUsMTV0O5haI4BiKognKi3FhOmlZcmoaMyLY6RJSldIFmwtMDdLGW9pMow0NjtSIHZRHnRNMGhSHXc0OUAtMDZaJH8zOkE8REltM5R8QaF+RKN8QqBqMo8xNj0oKi42P0LTkPnQj/anaMqdYMCbXr17RZzOjPPGhOtkMYaMTrGqa8+YWryhZMOVW7d2P5mQV7GSVLifYsLKie8/Rk7Af+W5eN2BTKBlO4AtFT6HTqhUMWyJT6xfmD42QUJuOZFEU1VoM4pmTHtLKmWkZciBRKdfLIFbZXGhYcZDajZcN3NRWmY0I0ktNDkkKDFES1dEMlcySDgvLEFSKHM8IlevcNNXRWaTYbGKXKVWfj0rPTchDjBmcH12SJIbGCVZakZhT2pHdTtWjDsC6MslAAAANHRSTlMA/Rov0DYFKhIY/P7+6LJqzi/o/97s0M2Ma1mf+uxaQ5/79OzjtFqq1p7P4Vqey+LiYFWMuZiH9wAAAkBJREFUeNpl0AOjpEAAwPFZVs+2bd1V02Zrbbw1nqXvf7M4/3L/OCC4cAUGvJOIFwxcLQQBcTBzGeyWpeWJKWRieanbg5fHBwTwjZpb++vexQmPbbEsa1m2Z2LRu74/PDzqQ7ExbG6NrhiGEeoxWHZldbVYbKBIHJmVYiVxZ5Ak+R0hScO6G355qZhHBAALicZw0cywKPWF7EyqWGmY3wAAvhkzlTLvf0UyZD8kUqnUsQ/F4G4tkcjcojhAWlSmljB3gygSc0NZjhfYEDkQYimeyxbmCRRPRvIjI/mSbfU/1zAsO5dX0MkTFE9hLkfpIqQ8FotYHgqKOpXLwVMA8DOdV1SBgppWEqanhZKoiZSgKrx+hgPsXM/ftDP3uZLG92il3H2mfZPXzzEQmKVjN0+P73cPkBY1TaPhw8f719NNjJ4NoChqnUQ8fn3ddEWKEt3m42M8/tTRRBSxCxUmq9eo1t+c6Wnnrf6J9qtJqF5gAJ+PQL7TbrVq9Sh9e0tH67VWq93hYWQeB+BQkWGMyzajjC4gOhNtZrkYlJVDAMDeZkSmoYz+jcr1Zl2UIS1HNvd6w6fEZKjT0i+0DuWYMkcAZJxjYqpcjqp0jxoty2qM4cZBFz6WZiKq+xwuvzrOazn87KoRJj2Ggx7MzylOxK2Ge6puxFE4PwYGAv5CknEYN5rNRl20kyz4A+AXbGyISypMj5LkhsYw8Ad83D9U4NLJdJorDPnHcfA3Ym3Dv7O9vePfWCPA/4I4FghgeBD88gPZtpZeWbhDpQAAAABJRU5ErkJggg==',

        /* angel */
        'O:)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABj1BMVEVHcEz5hQn/qxb7oxj0tS372YT/gwH/lAz9nxr6fwT1hxT/hgT/mBz/hgP/gAD/viX/jQr/sRr/sxvvqyf/vST/ggH+wTb8zFX7sCz+viP2uUz+1GX/iAX/jxP/uB//fwD/pBT/th76rSrykRf+wyrrhRD6sSDvkRPsqDzyrB/wmiD0pxv93Yf+2nn7zmf902n9zln4xmL93IH912j/kA//kQ//oBP/6G/onSv/xSr/kwv9pB3+2Uz/zzf/10f/5Wf/31n/iwX/8YT/3VP/0j7/7Xv/4l//yTD/mg3Wdgnchhb8zjv/nD/811j6z0D/uz38xUeJgVT+yTb/lC7302L/kDjzxlbdkiP/ryLghAz/tzDutDykXyU0MTLTw2v/q0SThVBraFc8PUEYHzz/7oD/fUz0vzT/k0f/ikX/6XZzTBXOih9pQxM/EQ+KTRxbExX/pC+TYx12Jxvq3HvEuGvBpkLgw07fuTyjjkhwZj8bIkE1N0MYID7YtlIdHzLcy2y5dSljPhJzGxhhFRY/CBDot7HrAAAANnRSTlMAbyc4/fTPFg8sBrL++zf9nuPr/dHonvtfr8lV0M9qWczMOp779Pu979Tpe9CL4t8nzLStWlq3JE48AAACQ0lEQVR4Xm2RZXMbQQxAz/bVZ4TEqTEcN8xpj8HMzIxhZqbCD6/u7NJM36fdfSNpJSEimnXnyubyhwHLmyvOdQ3SR+XcWlvdcMyTA+YdG6trW06V5CxWh02xtGBGdyVQ88KSwuawWkQ7jS6q5XZX1s+zrI9led6fddnl6kV0Woyc+TQ3EgLlcwcBt4/l/aGRuU8zUl6NbBYcKEEgCEEADXZW1v+Syi65RJA4AIhgQrJ2lSTHXRzP10qRaD4A5KORUo3lOde46DAouBuNRCLR4jZQlI67UBYDaTNyaKVC1or5g22vd/sgX6yRlQrKGW0gLRSHmtMJgQiAAxsghETajHKUBbJOUZyf9QX/lkEf6+eoKQyRD1Fc8ubWLRBvmSuv9yrzRgju25skRw3JEcUwxd01Gg/tTPf12uu9fu1m2g+Nxh1HDStEGYrdPz33eo/dZiDQ7D72es9P97EQSEhrpLLJl3ank2kSQDPT6bRfklnKCGmxyXK1mkqlrQl3UMKdsKZTqWq1PAmNmpjz+N5evJWG0QMsn26J93PGBH1+1uX2d3b2W6lsLJZMxmLZVEu853RfQGJjulyhECcvDo+/AseHF2S8UMjpxjAEkNE6hikfnfwYcHJUZhgdLeuvTEvjOMOcnn2XODtlGByntSpEQj1Kh3GcrF9+Ay7rJI6H6VE1MsCg9NDhMFN6r9ffS0w4THuUBuQ3aq3eQ4vhDATRHr0W4v6gkin1ngF6pUyF/As2YVJ+BJSmCQz5D5jaYFBjmj/iJxL8oG7v3wBJAAAAAElFTkSuQmCC',

        /* glasses */
        '8-)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABelBMVEVHcEz/uSD/hgT/lQr/hQP/gAD/nRD/xSr/nRH/xSv/uiD/gAD/hgP/hgP/lg3/viT/wCX/iQX/uB//uh//egD/vSP/wij/wCb/wij/gAD/gQH/ggH/gQH+lQv/uB/9nA/+tR36ohM1OD5sWDhpTigrOVXonhebejn/wCX/yjE0PVD0rxz9oxT5qhfn6uwwPFpVXW7/mg5JV3KjqLE/R1a4u8L/4Fr/6nP/iwX+0j7/2Ef/nhPt7vDM0NX/zzc+SWDwsyH1viquhyXj5OZTGRKCiJVNSjnX2NuqsLmanqn09faWdiniph9BT2z/kgjIhSDrnBzVlh6iWyP2xzTz43vbxV3vz0+monH/8ITLs0rgtzV0fZB6c069w8pgIhL/42L/52ssM0FhZ26gaBq0ayVuPxDx2mf52FKzkyyChm/221/u2WiWlm7VoCCNcylfWTjSxWpLVl93d1bmwUGSiluQmKNkZ13RpTBgXEr/7X3/3FC8fRXaiBJ/UhMWyvBOAAAAKXRSTlMAKrL+0SoS/RjoNzdq+wOy0FlZzgJq0J7Mnszs489qnp7M/Uxm6uvp/otTkL0AAAIxSURBVHheZdNlT2NBFIDhqc1lK5QK7sV63evu7m64u7P233fabYDA82mSN+fDSc6AD5NQodUq4CT4bsI8O/cDmZs1T3xJcHoGwwNuJIBjM9Pwc1MYsYDb4/mFeDzuAGZUfDTtFO5GxeHY3XU4UHfjU9r3uVFDZQ9BfVTHs9A4aig5h/b+VyMcxRUs4GnU6ydO50/E6Typ1xueALYy2sGCPz5xgnDQrA1jrXkgCNzTI24ZbmS2d16EuCh28+e1Vqt2nu+KYlx46djNAFjXwj1B9jHJqJhvtlrNvBhNMj5Z6IXXrABaXqV0JnkgxaPd+6ur+240LnHJTFp6tUCwsfMW9GfSRJBIplgklSTy++mMP/i2swG2WAJFmWW5aIp4eCBSUY5lZRQJdgvYslki5WPktJ+JS3d3Upzxp2XGlyKyWRvY3M4lOD+DyFLv8rInyQzi5xK57U0A18mIjRP7/edgon1x0U4En/t9kbNFyHUIrKt0KJLYJ4j923bj9LTRvh2+E5EQvWoFwOSlyevITfasU3Uj1c5Z9iZyTdKUaXgCyxRNkrlQOFzFkWo4HAqRqC2PDkKvoujS8d9yyI5hmB1BiaZUejAElSovdRiLHR8Wy7lcufi7RFFelRKCEY26wFPlyiAWGyCxwR8vX1BrwJhO7VLxVKl4VKlUjoolXuVS68A7jdLgKqh4L8LzBZdBqQGfQL3a4BozqPXw61Gb5heWFheXFuZNE+C7SajR6TSfv8M/MrOJk0idk5QAAAAASUVORK5CYII=',

        /* kiki */
        '^_^': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABUFBMVEVHcEz/rxz/hgP/hQT/fwL/gwT/nBP/mxL/xSz/viT/vSr/riH/hAf/viT/uiH/kRn/uiD/fwH/uB//xSv/ig7/oRf/gAD/hg7/jBb/wCb/fwD/jBT/tB7/ggH/gQH/mx3/oh//zDX/53H/kQz+1Uv/h1H/2mr/ly3/kD7/nCX/kkf/mjf/ryJoY1f/1UUiIzP/3VL/2k1bFhL/lgz/iwb/oBcdIT3+7H3+s1j/zGD/tzT/lh//kFXm0HdPUE/RvFv/oyn/xEH3tS//pzLOjTn/1F93RByYYiOnbyX/s0L/0z3/o1P/8IT/6nh+akT/5mr/mhWMgEv/31naznj/qBbv1Xfnqlf0tl/DokgyNUGUgUT311W0omeXj1wqLTrVd0fpozjqkUGdVC/try//oz45Eg5FDA9oHxjcqjyKWyT/wF7/4mCKOx//nQ7mv2bmv2WXB5hbAAAAIXRSTlMAKv0HKtAYEv3P/umysmr7NzdZ6J42amvPnllanuzjzOP75XlxAAAB+UlEQVR4Xm3SZY/bQBCAYduNMZzmGM3sMDPzMTNj4f9zZ90ovV77frL8aGZla7EP0XgohNPYf6IiS+xXiF2KUJ+IDrAMzw8hnmfYwF/juJ/hh07CzRnyjB//YyEWUXzvHdqLI2ZDszkwCWjbDVgCnc7Sfua3CcJkIgi/lfHTLgYY3kEGlMsBI3V4JoCMgqVwXq0m5NyEWg3OhcUUYITjncT5biy2mxtDOfR0nnB4LgK4Cluls1g2G7tEeImeziTYuwqfzwKeXFUv7Ozp/ni8f5q1L6pXJ4AsjeFertHYsn8qFbuKsGpXlB/2VqPBeXFszlssDo6O3wrKYQUdWjlUCm/HR4Ni0TuHcDAajfKgwgQSwPLwYoAQ32w9GOUyaEeB37CtdMDKZeOhtYlj9EbdNGT5up0vdN6hTiHfvpZlw6xvwD+K6qYmy3ePry9SIh5PSC+vj3eyrJl6FL5zJahqmnHbfUp2e/1+r5t86t4amqYGVwCpxZKqmq2b3nPS7bl30zJVtbRIYdBCsKTrdavZ7n+D+u2mVdf1UnABQ9E+cSeTObAsrnl/3+Qs6yCT2RF906viIcUU4mlAKZH0YNPCZFpMfZ+VEtNkGJvl8RFpUUy5iWKa8KG5WfQ8SRBpN4Ig5z/fbGo5Sq6vra2T0WUK+7cvtCcc9nwc+gW0oHkoXrM4yQAAAABJRU5ErkJggg==',

        /* squint */
        '-_-': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAyVBMVEUAAAD/xyz/wif/viT/sRr/iAT/nhD/nRH/mxD/sRv/gAD/uiD/uB/4xDH/uiH/sRr/pRP/igX/hgP/hgT/gAD/hgP/ggH/xCr/wCX/vCP/tB3/sRv/pRP/gAD/2Ej/3FD/74L/6G7/7Hj/1ED/yzL/0Dn/4Fj/41//rRf/lAr/th3/5mX+vCLQmzT/pRLAs2n/nw//iwb/xSosMUv/mg2bjlRQFRFRExHixVBnXjrTu1bt3ny0jy+ifiuXdCmSbyjrtCl1RhdSHRF4IEbGAAAAHnRSTlMA/v7PKtAUGBCeKjdZ9mrjNllqsjf76OOysevrzJ4BmTTUAAABkElEQVR42m2SBVrlMBRGk9Tdi4eBJnV/htv+FzW3gnPqPd9/o+gLsmgYooz+QDE14ciyjgTNVH4o1RYw4zxJOGdYsNWvTjzGLKH0EqA04fhY/HSGwDiYNANS8JwJxkdOgBio6gqoQNOECWtWPcHv7hqOq9nik6Vdm/DFXc8sWU7seQxL0cn9Aya7FJ5GZBKWLEFQwBJNGDFBaiNPLm92u123JDt4vYG6owZzJmBO6e0G6CbZTW+3lHIsyEh0ME/oXQfcT/K+A+6mmXBE5J6Of3doPHWRe0YYn8cJwwTWcXJGzlwoW2PGf8wQOFxDWfm8JO82q6rs3ZHyXIah5DUZGbeah8en5+enx4fGYmwkdQ5DQV6flzV5eX3b7w/Afv/2+kLqMu89kIrUgq2bL9TgWklBgF+0+aTJOGI8jmRSeVv4aEINir7Nwa/koPoiUNGMLhXbvgVyoAX6bSHpaCWUhmK73fYz8FIMUog+0INoKD4YomDJrai+FA0rkeSrPze1dyHFgHThKegPZD0MdRl98h/z3EzQet/AXQAAAABJRU5ErkJggg==',

        /* confused */
        'o.O': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABTVBMVEVHcEz/sBr/wSX/sRr/gwT/nBH/iwj/nBH/wCb/fwT/gQz/hgP/xSv/vyT/fwH/gyD/iQf/uB//uyH/rhj/sxv/gAD/vSP/ghT/gAD/uB//ggH/gQH/jRX/nQ//rBf/th7/xiz/zTX/63f/1kT/523KyLr/nBf92U7x8/TS0s/f4eX/iC7/8IPztCfQv4vV1tX/uCL+7H38pR//0j7/iwb/gT/+3VrwtkHyu0L/3FLj5+r/lAvN0dXav2vFxsno6+7fjxsuM1H/kSfoniH/qSv6rhz/lTvYyIX9pjz9uy/y4Hrrxlnmvk7X2t/prylZXG3/d0P9ohrksmp6fYuChZBsb3/4+Pg7Plj2nBX/jBGrbhZmNxGVWBpUJQ+CQh/mpC5OHw/YdgP41WPhiAzn2ILr13HWy47n2YfyzEnax3LKuYHMu4X/4mDYdgWKRiAK5sCgAAAAIHRSTlMANv0q0BgCEs8qsvvosjf9WVmezOtqamueauzjz57j4yAobPwAAAIYSURBVHheZZNVc+MwEIAdQ+wkFyyzZOYwM3OZmfnu/z/e+pJrO+33oNmdb1ar0UrEJ26Wcrko1k38hAlHuF8AFwkz3xQ7zyGMkwDGiJtnvzrKj3BSUJR8XlGEJEZ+6tO5OEflM+9AJu9ozvVRxyGrWatdZUQgc1WrNS3ETWtZf/vuN3CT44HcjRPftf2Tvkuk1dzM5rLZWz4e52+zEG42LXLJcQyHkgL0E0U+bppxXhShr5BEHAMyTGJBGZZfHhzn2IeX8lARMBmGe4kg/PwqRTXJnkhb0qLS6zNGETfBziD8Nj48PFS1R0c+aiok4zeMZliC2kAjTa0c7OmqNDDNgaTqewcVVRuhDYpwzaKyXt06qu+r0SfTfIqq+0f1rapeRrMukGRZL0zkPc/fg6zXtwp6mQRJrZMjrQrbRqvSQBQHUiEK21a1EblOwYFifXtcAErdd6Bb0iEe2/0YHMi91o7l7EqpJHWVPKB0pVKpYudi7TUYe0hOtHq7u7tDGKYgwDKEpNdKyCHn+lYbRjrd6fURwgBC/V4nnTYaqwwBLATT29vpTitmbQJWrNVx8uDCZGTeoGE05MTp2cX19cXZaUJuGEbQO30qHvqkKMvH55d/gMvzY1kuntAeYkqAThWL8k7iHztysZiiA8QHHq8P9H9SPi/UfcLO0b7UFB89x35/1KFFemV5eYVeDDHET9ysJxDwfP0OfwE3iHNYYO4TSwAAAABJRU5ErkJggg==',

        /* confused_rev */
        'O.o': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAByFBMVEVHcEz/tBz/wSb/wSj/jgnxfwv/hgP/nxH/tBz/nxIfLEMkMUr/xy3/hgT/gAD/uiH/uB//vCL/hgT/gAD/ggH/hQP/wCb/xSz/xCr/gAD/sxz/wCX/gQH/ggH/gQH/iAX/vSP/jQX/lQr/vCL/tR3/nQ//pRP/rBf/th4cJjoeKDwjMEf8oBClcCOMXydQQDb/ogA4Sm6dfDg3Sm//0z7/qxb/lQr/zTT/xSv/pRL/2Un+rhn/1kT/6nX/208qNFH/ohH/yjD/nw//jAb/527/31f/7oH/kgn/0Dj/7Xv3sR7zxj01PVCkqLH29vZMWHDlriMzOD2beSjl5+nBxcr/mQzvxFD453/jlh1YWEY4QVeNkp/b3eFATmf7z0Fpa1voqCD/5mj/tx5pQRlFTFv/nA7/wCV6SRf+4V/BjiLYcwDy0Vnwrh7i1Xbrqi3jqD7yujCDbS9VXGI0P2RkbXpsdIeXnKfZdwXvqydgJRfVcwGJXxreixbImiWYlGf33W6tlUHi5ehYY3rYvE/MsUSIgljr7e6qiSjOn0bZeAbT1tu1r3Puu0doJxjgzGZvZUAfJEKfiT++fiSShFDYszTcfQd+f4mus7vhJ7JRAAAANHRSTlMANtD8Aiv9FioQVvz7sjdqWcxZatDRnuzjnuuyzOzj0LFozc+enszj4xM+8vfwsXALrOX50ZUv6AAAAkhJREFUeF5l00WX2zAUgFHFieO4DQ1Ch6HIYKYgMzMMMzMzlrl/t7Izbabtt9HinrfQOxKopcF0KpUO04D/w8zNSGtLSyvSbMb+IdyE6GkvAfPSesSE3zRdu54mBE6CcQJB69t1NVMhNkKQXK5JmMslcYQNUf2Zg8ZJrsmhIadzKJ3dzc4v2pDrWbzn2pyiKDqz0xtXG9+z6h5cQZPaK1TN5/OJ6YXLy4X5QUZtkg3rh4NVc7vdmberkcjy2Qlh68cgmtW0UA68g6Uz7sx+aS0UKkSWT2m1Ge5lgPEGdq+2t6enr2bcb0uFRDgcTh5XAsyABmB1jLe8ODUyMvJl4SBTWT06X/+RDP8sHS7WYUD3gPEK3GdL/tNX0T03uh4OBYOjiWIkn3uFAtUdhia4Q8uKZd+nYMGyMlosRizB0kuI4zavkK4sVz6I4lxuLfFmLRI6T+Y/Xiy9Brr74wxUaWYSbujgLBg6Oiom3qzG9gbjKwC7NywrwSm7PcnlC8lk6DgWj87GLUBzl5eVllmSZk5zsWAwBs1PPrUAUG+FWuVyORD4drG0FJ8a9PNPnt0GAOtj+WGZ93Ym4G13pqLR6Kyft/Y9hwh6KZaE7J/Yeg/bmpj1+3nSSvXekhE3UHaWJPnNeaVNniRZO2V4oSBAuz0pu5VlSSWWtdpTnm4UVBEYmxxUamxszA6DR4pyNBnBbwSoQevweCglj8ehNaCghgBvaNRqHUpabWMDDmR8XHvU9W0dXZ2dXR1t9RhQevjor++AGo3oze/wC8xNp/6ILP2ZAAAAAElFTkSuQmCC',

        /* robot */
        ':|]': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABRFBMVEVHcEx4bHaGMz3ihwCxubimrKxwkpZqi5BIZWxHZWx7hYR6nqLqxobKHzzPVQBwk5dhh4u6EEmeCTnMHlq2aYqEcn+Kqq2oiY9hgodefoSSYHppi49HZGvzxgDJXTTpvwCYNle6EEjqTYTlQXnnOnqsEkW5wsR9mJqfbkSNjo3ebwDFlYCymE3MTgDTcEHNtGPBOgDut2HRUgDppmLuYJvuYJqSuLqVvb6Xv8Clzc6awsOdxcau2NiozM2iysuRsrSq1NSrsrSgx8ixuLmKrK62xca/yszP19i91tbV39+x3NyApag8Skq7wMGXoKKLk5aes7RyeXykq66/6+o1PkFWamrF39+p0NCmT3UnMDGz3t5GWFiZpqkoMjJXa2tyj5CrvsCAm52Ah4uFn6F5k5aoVnvJHlq1epzeTIO9i67jNHC45OMTWBhRAAAANnRSTlMAJw/gKYFz+klJTnf0J7BrKrJf7vWP1KNit7v3QcmLzeqIe1KH7E7R8ovR5u6+u+5E85H51dXDZu6rAAABt0lEQVR4XoXNVXMbMRiG0c8bx23Xdc0Q5jKDYJnJzGHm/v/7yms766aZ6RnN6NU8F4JIavUV8/0rPGX1x9zIJ+6Jxn3+Nre2trLyPhWFrc3xg3/34SXz5ePb8uvxL5tbkL/fgEw6mXxz1rId5/Tw8uSilEymM7Bxn4fsTi5TotIjtJTJ7WQhVoQ07XZ//6XbpWkoxiA+DwkloLI38KjCUG8wGNJAScB8PIyCYthm3fUNQRDDIVNhErkiNrxOo3HoeJh4Oht118BFLozbBST7ervWNH1CfLPZa+u+jAvbo1j+eYdlt9Punesuxq5+ftTuuAq++1WOA1+4vcGiozeaDdNGyDbZ6Dgivrkt8MCvX18RseXUTV1XMVbHwyBX1+s8QC6/SxSkntotCynkYezmc8BkWSQYqQgLRtUKB2ExCyOpRUKFEYKtahWFk5LFFIQSwlAMCewI4T0UEjCNmmJYJw9UQ9FmI1Vre0cTeweIzkZJO+vVIqomRVEMJOtghigFYhT3Je2y3z8O9Y8vAmk/iljTNEmeGkrsiaexUkX/qFYmMbaw9OyRpYUYTHDLz6desMMsc/A/fwCd34HCQqWIjgAAAABJRU5ErkJggg==',

        /* like */
        '(y)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA7VBMVEUAAACxZBPHexvRhSXEeB7ViiP7xT/ZjyDPgh3clCf3vTbbkiXYjiTimiHdliueURCfUQ+lVg/akSXwsCrtqyrhmijwribvrSb3uSfysCTloCf8xDXkniLNfxvakSnIeRm5aRSaTRGpWhCnWBCiUxDooyPztS36vzD8xDX8wzH5uR6kVRCjVBCeUBD/4Ij/4o3/34P0sBnmoCf/2W//3n3/zkj/5Zj/45L/3oD/3Xr/0VPqpSX/2Gj+vx//yz/9wSr/1mH/23XvqyD9vBr+xTHgmSf/yTfIehr0siH/01zXjCL5thrCcxi9bhWzYhFxh23YAAAALnRSTlMABAoTJhv9Q4Yy/l7Y2OyOubShmdW13emHx3my8Vdp7sdU+DOi+vnkxZtl5tt0tzAq6QAAAW1JREFUeNp9kgOi5EAQQMe27ZWinth27n+cbXzrxXnNqiq9olItfUp5td58qstbI5pUPrNTxdw1v5Bc6xNXm1me+okstzqW6Xc/lvudokS9+oeu3W8A49vh4wn7HWCb/Q87VuYdQN0bi3al/F52v2u0SIPGj5/bX6vfzfrLJvVZTAuCKFKMJMkgbiwm7We5aVACRqQhlO2pcxLlaq3WXAAkINhRmqkO2tjNl8tlg4L/iWAk2TIdn2y427EsRWMoAsNId1mJkuOeRJuXZVu+S8wzd94ZNPEG17ymAWQRd4Rs8xHXxVPOPF6JsYZ/baDFvOFFHFlPva97Aa9YGgBAs6xY4QOTTY6tMu7ZY13d9AweYgRBYBhGkPrQISonjk3T1NUhLgI+U/UxOcPQ5zhOddgnHK5Xe5DnS55lWZj4sAEEShXtg1AZjiB/ihx6NITKJZMXOSlDrsO/lyLPwjDM8tP1XXnVzsPbGHL79zjhf+0iSwKEAoLHAAAAAElFTkSuQmCC',

        /* smile */
        ':)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABBVBMVEUAAAD/nRD/nxL/wCX/sBr/mxD/xy3/hgP/uB//uyH/xSv/viT/sxz/jwj/igX/hgP/hgT/gAD/ggH/ggH/vSP/uB//th7/th7/rBf/pRP/lgv/iAX/hQP/2Ef/0Dn/1ED/3E7/3VP/yzL/42D/xSr/lAr/31n/7oD/8IT/pBL/6XP/6Gz/7Hr/vyb/tB7/rxn/jAb/5mf/nw//mg0wOF7/uiCwhCP2tCn/qxZrGBZAP0NLSkbOuVksLUPw4Hqckl/twzqjZSZuOxTKjS2bi0almlrszlJERl/nylGFgF7pzlvt23SMaSE6Dg9bMBPdsjFVFxRODxBZIRGEPyCycSp6ck97c08GMZEdAAAAHXRSTlMAFirPNhD9/Vme6LLrnllqsjfO6GpqzOPjzM/Q0VQ1+7UAAAHLSURBVHjabZKDei0xGEXHOEal4Ni2PVP73vd/lO40ldYI68uOfuULqmYYmqr8geq4egDorvPTm3u6laaUMUrTlr5nfnVa0EozQjgghFErqH06Q09TwlP5DMinOKFp3fhop6MZVKtVqVRa0ISldU06M2hJVykLpLWCst/9LDLzGagqKJcrmTySs/vCqTJ0Oi1XC6Bank5lsArp1NKMp7bj2a5QKBYLhd14tk1xlq45kK5I9Sb+bDIvgjnexp7IdZF6IOT5uNt9l93u+FzIA1XRDrMUsf+63QukIvei2/2PWJo91BQjlMWA+OVicSUHdLVYXHIMKBsyIGtpiuFimnIqWAYMlqZrkNpRLQsrV+F9heCytSNNUY/r0n6urXT1Y0w03OjB9q+X0ICT5XUfrtcIY56RkrD9m9v+3ZLS5V3/9qYvXCkCqZ6UGvXeYHX/8LgGjw/3q0Gv3iidqAqI5krDRn2weRq98rQZ1BvDUi4qtyyWa5eGQ+jn1eoZajgstXMxEwpop7lOu1RCOmjgpd3JnX4USvysmet0Ou12Gxdecs2z+JcCi9nN3AdNO6Z9K81owrabr9h2Imr+LOpIOJEEiXDk76LX4nHtq3kBlp1WxdtFtlQAAAAASUVORK5CYII=',

        /* big_smile */
        ':D': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABJlBMVEVHcEz/gQD/oQr/vx//mwz/hQD/ngv/shP/wSH/uxv/uxr/uhn/hwD/hwD/jQD/gQD/qg//ngf/iwH/tBX/pgv/shT/cQD/gwD/uRn/gwD/iwH/wSH/xSX/xij/gQD/0Tb/pg7/31f/2kf/63b/zC7/yCj/xCP/1j//lAL/mgX/sBH/uxvsy03QjSOnqb1KSUY4Pljj6fX/6W9CQD8uNVz/5F//jQHeyF0rLEH/3U6xayOok0z/6GijYh2ZhUiyo6ToqR7TwWerl5RwKhJnT1tvQTzP1+vqoCH/8ISsoFzx4nvw4XxoExGHMhi+qKqjm2XquSl1FRGEOBnPnByZeH6FW2Dbt0XJqEmqss9dFxx/GhP4+/+znHv211fs7PBnDgz/7n16FxJXpg5jAAAAH3RSTlMAKv6yDtAWKdBqNllq/gI2ns5Z7DbjAujOsrKe4+yeptApLQAAAeZJREFUeF5lktVu5EAQRT2OacBDSWYn2G1mDzNjmDnL//8TW922MqvkvNjS0b2tKhWzISuIqZQoZJmvCOkD6fDo6FA6SAufFJeUDB0hy0JIN6Qk978TtwxkqWoPUFULGVvixqUkHak9RWkBitJTkS6lPnKSboFrDYf1+nDYAmvpUpzloJO6ugbUqYXm6N2kiazI/QEiayEzSWcoQ6midDrgTk/BdjqKQorJRGlTh+Cg0T0DB/as0h1AVDfTsJc8afUb1W7lnMjzSrPb8ElvPgutBpXNZuWCyItKs0mlURYYcRekqoyr1Zuo9qZaHSsqyF2R2dk26ZSzmRZJbTajk5rbO1QisLACDWbRNFgDOEQk1HrG7Xjw8uz7Pym+//wyGN8aHtQKBc98WIbhZP4jZj4Jw+WD6RUEppR3venqdV2r1X5R4Gf9upp6br7EMEXW9UbLcF37HlNbh8uR57JFsr4CdqeLt9XT43xyfT2ZPz6t3hZTF0MrkHGwGyx+Ey4v6WcRuNjJRCeyb7M4uL/7G3N3H2DW3o9PJcHbDj7pX71Trvon2LH5BBOT49tEB/3RqB8Q1eZzzAeJPblt2w6LMevYdlveg9wGLsPLcpsiy3yG+3zUxWP+G8AfFwXmKyUhkcslhNJG/AOYGG8Vkcm/kAAAAABJRU5ErkJggg==',

        /* frown */
        ':(': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA21BMVEUAAAD/nRD/nxL/wif/wCX/iAT/sBr/iAT/uB//uyH/uiH/viT/rhj/sRr/hgT/gAD/hgP/ggH/xCr/xSz/tB3/sRv/nQ//gAD/74L/3E//xiv/yzH/7Xv/zzf/0z3/6nT/5Wf/10T/42D/nQ7/6G7/2Un/31b/4Fv/tx7/pBL/lgv/qhb/iwb/rxj/vCL/kwmllk8+P1EtM1L/vyXCrVElJ0A3PmT0yDx2bU3lvj6ugCiMWhzToCtlMhHpqCVhWT+chz2QhU+1mj7t0Fb1z0k7DA5BERFuNBvMhRg4yViqAAAAGHRSTlMAFCr+z9A2YlmearLM47I3++jj7Ovrnp6HrtAhAAABq0lEQVR42nXOBZLrMBgD4DAWl2O/MKfMREt0/xM92e0Saeif+UayhU8RJU2TROGXiIapnJ2fnymmAf9KlkKo6yEuJYr1hSWbuF6YOkgaei6xpQ/TFOqFTpbnUZTnmRN6VNHee7DUyaIgSJIkiHInhZ66ok1geRQkPnJSYoscLdnFJrN/CFMsu7LFi2w0y7nd3HDNMzbMqgYvApkxBfKqATTJcdWHcfWPu8TEau0vrImCVAemzvAw9I/o43RSYF0StAuCD01Ho9n0WOUnPkQuNEG7lKkb3o7nszvfx1/9O5y3oUvlSw2zfVTvx/PxMEiQYIjzHsU+ZsVaIRO6WI6WD3mE5A84F5TIBT4kXPX6E+jqMXV40scVbNLvXQmCoJe9oo8ydVfrzWa9cilq/aJX6kBRhRYTmWx3T8/PT7stkScFTMUqqlXZAe93L+vtdv2y24M6ZYUiqzaqGPy62ff7/cl+8wqKqwaKLJI6iOOy7JxSlnE8UCXhlKbaHVTxe6pBV20K75Eare5gUPEMBt1Wg/XeI+pqq3tKS9XZe1/5Wm0j6vU7fXWp2ZQ+y3/w80kzMuR03QAAAABJRU5ErkJggg==',

        /* tongue */
        ':P': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABF1BMVEUAAAD/sRr/pxX/nRH/mxD/xCr8ggX/qBT/wSb/uB//uyH/xSv/uiH/viT/uSD/sxz/hgX/hgT/gQG9Mj7/wij/th7/rBf/pRP/nQ//lgv/jAb/iAX/hQP/gAD/gAHSSBWiJC6yKzexKzahIy3/zzf/1kT/lQv/pBP/31j/yjD/2Un/5mj/6G7/xiv/3FD+0j3fw1I+QVdlEhnJOzPwxjxZKhOHfUz/8ITZS1n/5GIwN17/4l//rhijJCz/wCXw3XHjsCi7hCI/Fw5BQEFSDhVRUEr/7Hr/uB7YQE6OHiXBLTpyaUPo13Kmk0uwoVrLnSepcxcwCAzZlBxtKxrdlSaeViXykBz/7oDnZ3XiWmhlPBMiJD//63Uj/5yMAAAAJHRSTlMAKjcYEPv9FNBZnuhqss7rWbIr9Mzj48yez2rQ0WrQolnQ0FlKvQpqAAABxUlEQVR4Xm3R5XLiUACG4Si2QKFQt5UjURdc6+6ycv/XsV+SsmV2+k5gDvPM94McYamiKEliUfgkuVxpf0HtSln+j5RqSdWJi4iulqrKsok1lbjUcJBBXaLWxA+TSrpLHUcbIM1xqKuXpH87mAEyTcsyTbABfd8qtcx6pvUHWWYv05qSYVUlFDvYCYJiS4laTU2u50PYK4Lm07oMLC+GsE4HupiWgRU7Rww7CNMc7QreWT1DL0mucrxKEi/DelEQ14CGc+n/vszwJMHJMYBroiCt2MQ1vEO/fzh5RZP05BkusVck4FgnNDru948n6X+ZpKeIEn0MFNfHNl7ete/fmBYyb3z/Gi/QHq+LQnHjFEqo52naoNcbaJrnUQI73cDVbg4zzS8lv5bMhpu4kgaHTme30yhyURRNb2dTGG8A5S3o3f18Hse/UBzP5/d3sC1ZQNuMDx/io6MgCN6/4ochZ9v5lTUZ57PH4Hw0Ok8/weOMc9ZUQGh1hzH+9Dy6CC/wjJ6fOGM7q4AsaZcx9hKedc9Q+IIfu9LCsG0WCoWw+xN1Qxyb2H2k7O0D3xBwf08BLCc3DlqYdlsHDVn4pK/fWq3vP5bgL6rybGUg3ywdAAAAAElFTkSuQmCC',

        /* grin */
        '=D': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABTVBMVEVHcEz/thX/gQD/lAb/uxr/nwr/gQD/shP/wSH/hQD/hgD/uhn/hwD/vBz/thX/ngf/iwH/tBX/ogj/uRn/vh7/vR7/uRn/gwD/iwH/xSX/xij/txj/ngb/rRD/gQD/ggD/gwD/wSH/wCD/0DT/yCj/1Dv/iwD/2kj/3U7/xCP/yy3/lAL/6W7/52bz1VM0PF//rhHQjSP/vBysqLP/5F7/mgX/2EP/31P/63bj6fX/4Vj/1kDpoiCtmE//74H/8IWmZR//pA7bxFhDQkU2Njz2530nLlVVUki2qWP/tRXmxkv521vOvGaslo1nT1vSsEekrclvQTyGNRj/7nv/8IdPSDjs3XkdIUMwMlBbW1S1biTquSmZfj7PnByZeH5yJxNvLhLprR7vzE3u8/yFW2CsoJRdFxzP2vHQ1OW7pKZnDw17GBL7/f+0nHfs7PDlw8hoAAAAI3RSTlMADg82NhQqKdDQGFlqnhjOWez+zmqyarKy4+zjnuOe4+yysp5Z+QoAAAIDSURBVHhebZFVc9tQFIRly7IkQ+zYYW7vFbPMzMxhZir+/8ceOanjdvI9aeab3aOViDko2uOhKeITFvxBZn1jY50J+hf+U64lBsuIA5CMmSXXvKO/YsQlBREQkhzCX+gP52FkLimmsnEgmxKTnMx4ZjlwgpiNa5qqqlo8Kwpg37OuZcwJqSyoNKBqWjYlcHj57e6KhKCzWlXTB0BarVahGUkr0w1RGYKFWr19UAQO2rV6IeUUO4v8EsqJ+tHpSatRLJWKjdbpyZEu5pDkBxl0Wrv1ZrN2XAKOa81mvev0BuGbRTFIvWUYZ43S4WGpcWYYLR0kjlIEvYlRDm4aRhtaobdtGHAzh/AmTZCLEoKVvX4//fZC6X6/B0uRtEg6UoaoGNf+TtHiTlB2JL1t44vLwmjUvdf1Xk/X77ujUeHyAtvbNEGFOtLVcByLPQ1+TRk8xWLj4ZXUCcGv3TLtu8n4JZPJ/J4CDy/jyZ1tbsHOcKRjl4ex18zDzykPmdfYsGx3ImGQvlDFzN8+Tx6vB9+AwfXj5Pk2b1ZCPgIIJCqmdfN9jhvLrCQChIN7TYmY1v6PGfuWGVHW3MQUL6skKvnyu94v5ysJhfUS75As72jrvFw+txzFsyQxw7vK8wp4IKEoPL8KuQ/cAZafwQbcxL/4wjvs7t7eLrsT9hGfQHlJ0kvNiT8aMHxNf4Q1UAAAAABJRU5ErkJggg==',

        /* gasp */
        ':o': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA4VBMVEUAAAD/nRD/nxL/nRH/oRP/sRv/viT/hQP/uiD/wij/xSv/uiH/viT/sRr/pRP/sxz/nQ//hgP/gAD/hgP/ggH/th7/igb/ggL/gAD/gQH/yC7/zzf/1D//10b/2kz/8IP/3VL/wyj+31j/7Xz/uyH/lAr/41//shv/oxL/5mj/6W3/6nT/nQ//iwUwOF7/qxZEEhBDQUPqzVXv33iqbCBTERRyHBhISVLOuVkrLUOckl/XrzdlFxfynxt7Hxmbi0almlp6ck+FgF6uii2jfykwBgzDfRuZUB/EfileFBVeFBYJEq7FAAAAGnRSTlMAEioYWZ7Q0TfO6Gqy4zbrzmo3++jMsbKezD7SqJsAAAGlSURBVHjabdIFshwhAATQgXV3g3Fl3V2+S3L/A6Vhif8um6pX3WMYf4TQfJ4S44uk0plCESlk0ql/iJQKjHMT4ZwVSn/VaZlx07JVLJOzMv1t+SwDuX6M+C6YZfO/etJAw+FoNByCpeouKWsbjZGR1jJRWPK4tgDRyr2StBRGcb/DAeY40MMB98VwCphG0fYflsdHGPRxeXzwbVTTwIxcXS33x+Va4nqPq5XczeBxOgzN1XI222uczZYrNFmHGLTCOO75NJs932efZ7MnV2KFGtWax03snk7rO65PJ6ya3KtVJaqqes0gUC+Kh+UMiNmQKfXBCN5SGmchZkk98aRa4PPLy9n31adnXlIneJV56GEZ/Lp4e1u8grDphfOM/AgiCUNZPi9UzrIWholIA1N1kSjebFU2ihJRVweiEYm55M23C/J9I2kuooYhQ7rRRMznyftO5T2Zz8Uk6uqjQnPRZCLE9eOGfFyFmEyiHDV0mrlpBL9+bjafV0g0zTU1yW6vBcY69kCtHnq/Qxq51lSnlWuQ/w51f9BGBv1/D7Wu02aT/ln6ARv+Ta66wWCeAAAAAElFTkSuQmCC',

        /* wink */
        ';)': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABCFBMVEUAAAD/oA3/nwr/sRP/ngz/wiH/mwz/hgD/hwD/uhn/vBz/xib/uxv/uhr/tBX/iwH/hwD/hwD/gQD/wSD/vR7/txj/rRD/pgv/ngb/lwP/lwP/gQD/ggD/ggD/gwD/3U7/1Dv/xyf/2ET/6Gv/0TX/yyz/8IX/ngb/41//31T/63T/1j//4Vj/zjH/2kr/7Xv/lwP/wyL/74D/pQr/jQH/5WQcHzb/sRT3rh5GRkX/vh7/uBf/rA7zwSn/kwKlml0zOl1wMw2LQRnv3nbPwGnOt1agaBpeJAnu0lgzM0flsiTMkCOdjUx3az+2nkPqy0zbzHNUDwmGflCxhhw8CgZ+UBTYmBS7gSQqfSSrAAAAH3RSTlMAKRQ2GNAO0f5ZnuhqzuxZarI2srLj48ye0P2ezOPspYls3gAAAc1JREFUeNpt01OCxEAARdFYLYwZt23bFva/k3mVkfr+nqBI/YihWZZmqAtxssK7EK/I3B8S3LyetDRkJXXeLfw0+kpPakZKRSlDS+pX9LexvK0ZajQRQYmoamg2z36951giUjRRMZJw9ONd4frdTDNGMt/1WnDQnbXwzQgojYjiy1bWTYzz2FoqmiiasXQOpWNmMRFNabaHA8rZZBwvEgshKHk1nszKQEW38MfJot1/x/5gOMFfLV3BmnkIRpfT0i5HrD0tlaqrFNDDUPSNbsVT62pnWu0DByWnFfCGplgvWRxgp0q+u6lW24N2dYll8rLArI1XF51O25nKYIPxTIaWnQXStzWd6HBYdFYIE1FTcbxYu6Up5q6edZSsbbHorG3csvVs/Q5be9+oQZNW3IBHsSt4DVZr3GOevny5/s5aHGlWcz9q1urlvA/IPUDrtdps1kSz+Wh8OFZgDxyF/I/5Rrl+Go+7aLzdds+VciP/6H/fskAmnG9U5qMeaTQnFM4EBBCixVYYXK4gIvlwuCV+HZSgWMhkwl9lMgUxSH1FB6RCq5VxarUKUoC895XgFyWp4CRJol/4e6h9T88vr68vz08+jroQQweDv67DG7rAXeYj/DN4AAAAAElFTkSuQmCC',

        /* cry => :'(*/
        ":'(": 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABU1BMVEVHcEz+gAD/xCr/mxD+hwT/nhD/sRr/wSb7ggL/viT/uiH/uiD/nRH/uB/8hQT/uSD+hQP/uyH/vST/igX/pRP+fwD/ggH/hQP/nQ//oRH/lgv/xSz/pRP/tB3/sRv/rBf/gAD/zzf/1kT/3VL/xy3/6nT/5Wb/yzH/wyj/2Ur/4V3/42D/52v/6XD/rhj/vSL/ohHozFWVvrDxlhP/mAz/31j/7Hr/0z7/207/jwf/th7Ao0O3qFvthQbGexKs2Ninz8lUUkUmKz9/RBPTkxrvwzk+OjTluTNfWD6bikn721a35eu82tX/8IT/7X7/74H/pxSTfTYaJELz4nbfzm3BsF343F8bHjNjFRdTcIKtt32mvZ9fOhGZw8FACBFdY1l5oLrG5+2CNB0dIDPyqhwfITO6u3itm1H0xDGlu6SgoXCqyKNgiqXl129xdlycsZO8hyO1PrbbAAAAIXRSTlMAKvsQ/hQqz8+yajcYWbLOap7jWTY36NGe+8/szOvr456SO9zQAAAB/ElEQVR4Xm3SVZubUBAGYCCBqEvXBXePu/u6u9S9/187kOw23SffDRfvmYHhDLIQnAiFCBxZknAk4UtubCR9iUj4DXmCPownCxCSx3xBz6IRAYwsUGIRIlIFEgsQ/yzk4wtUkc5Jsizl6CJV4H2h1zowkc7JnALh5Bwtgs5rPQHGNUVlIariKhPwuBjESKoIdSqbh7Aq1BYpEgu6M8ScphKnsPn9g4P9PKtwktM4FgaMuIUSp4Lt7YGqnOSWRgATwguCgb6gkIB/FmOWIxPDESIJKNJuWwfdtrQImCSQ9JYwm1JhT5wPOmFns/DCVhpJbwt876hijs+rw9N8/nRYPR+blaMeL2ynEWJHZwb99/1hq31xpqpnF+2HX62P/QGj7xAIvlkWmEqrfXzcbpmybD5cPT7+uKowQnkTrnZV0wWmVxmNqiZNj3/e3E2fmpap69oqzJla08rApHub5nerOZ02rU9lbS0FGF43tDKwwDD8l8G11Ww07qzrD8a6uxDxrKE5rAvd29uR1ZhMmlbVzsZnVxbNGoeHjnfu7zvVxtOk8btrR+ergq6UsoYBBzqXl53u55uv3/7U/CgyTwYUYtSfn+t2t16v1/wZ5DVo1FsqwQHbzpbsWq0WRf9bzfiK1+stQeDhj3veLnVq1/8O4t9NhZElwdFMBsUX4C/m2G0/HAYfRAAAAABJRU5ErkJggg==',

        /* cry => ;( */
        ';(': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABjFBMVEVHcEz/xiv/uSD/xSv/gAD/wSYiwfz/nhH+nBH6hQP/uiD/uiH/uR//sRr/pBL/uSD/pRP/hQP/fwD/iAMWp+X/wij/wCb8fQD/nQ/+gAD/pRP/lAr/ggH/gQH/gQH/lgv/vCP/sRsetvD/tB0NoeMsxvz/ggL/igb/vyX/wCYPre0duvT/tR3/th65fCYstuPzkw+siET/wSf/4V7/2kv/yi//52r+6HH/6nP/rhj/63b/7n7/pBP+tB/1uTD711Tekh31wDn/0Dj/zTP/uyH/7Xr/10b+5GSllk/RbQL/nxD/3VLbfw3/kgnprTjyz1j/7oH2y0r0yDz0qiTihw3fu0RZm5z/0z5ivvH/lgvrlRLYqSr/iwUtM1IlJ0A3PmRAQlD/31j/8IQQsPV2bU1oQxS9rl6QhU/HrESchz3moDFRIRBnIRi1mj6hXCBjJRK6hBzpoSw1y/86vfY7lrwdoN+PoW1SquFBCBCISSFhWT85OlTRgRSNZhuNZhpymYDCtlW3n0fJfRV7xPFa5GElAAAAMnRSTlMA/iroKs/+Ehj8N2pZ4ynONtE2ag3Qnlmensxa7Mzjz7HrOet187KxsrJRkZ6ez8b7s/Y108gAAAIYSURBVHhebZJVc9tQEEYl17ZkSExhhqaMV8xgZuYwM1OZ/nhXjlunnZyn1Zz57iwIuwdhc7ttBPYApHfI8QhwDHnJ/xThGcTDZh0ww/ig55+47RkersdoOp2m6Vg9jD+39ZzbwYBKr1HAWho043D/zYGzVJwF4pYG280SM5AzchrL8aLIc6yWMyA7c9e2BzcNPZnMcWIUELlcMqkbJu6xHOlj1Ewys5/no1KhIEX5/D58qoyPBOlFaiVzVqQ4USqsrxckkaOKZ5mKirwgX6FWRdUolo+CAxvlWUpTKy30GtrxobJBQ6s9CQ3TRhn5CKy/D+antcTHBCdZUuKg1GjYRF8/5p+35O7qp+XtaAGQtqHcteS8H/PPIsaM7S2tLO/wMIvI70C5FzMZNOuHZyMQPVpaWUqwLMexbALKIwhG4FliTEF4uLS5upmnqHicovJQlsI4UsZgRyNCBFW/l6pFWD1Ax4rVEoOjiDACc46nBKV2WWWsc94d1FIRITUOkpyWf9zcXCOcaX/d2vrS7ihFkKdJDAi9qzV+XbYjpwe3wMGppQS5Gbo72furRuPqWj85/AAcnuiCLKeaT7u/yuONi4uN2s9jvawoZf34M6hswI79kU6ns9aSUx0stRgIYl1eOM/Pnd9c2WaHbHbR9QRyXQZeLiy8feNa7OIKhGD8np2bGyCHRyenJiamJkeHSewBCHswaL8f+g3mXZQ5mkeSnAAAAABJRU5ErkJggg==',

        /* sunglasses */
        'B|': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAABsFBMVEUAAAD+lw7/iAT/wSbrgAj+shr/uiD+xy38iAX/gQH7jAfet0j+hgP/hQP/hgT/xSs2Rmf/txn/wCXNjBhgdaUpOFf/vSMmVcTMoUk9OzpJYphUb6z2nBBPRz3/viH/wCaLZyj/vSP7kwsvOE//gQHxnRL/hAP/gQH/ggH/hQP/hwQ7IjP/lAlXExT/mxAxKkE2O1xJDhH9oRRxHBlFFyJ9bZg8PDpAUHv0zUFTUz/n2n7qrB6ylTL/3FL2217iy1+tZCR7MTeMbSU7SHH/yjD+527+2Uv/5mg7ChN2OUiZdCJjFhf/1kT/zDQoL0L/iwX2pxdfIShvJiVxRFt1VXTpoBdrKS9RWYXzuSZsf55tNENWKTX7rxq4pUvfw1lNGBe5todEWYrIkhw/KjxeOlKdWCKQdCjZry2Yn5H+wyjc0X//0j3uqRpoHh87QEFlaVjHhx7/4V2hml1uPxCDg17/vSL04nVETll1X4agaBrwxDU3GyzEfh1+jJrFvG1Wao/1oBPpliFeIRHx4n/u0196LC9gd6P/7HfbnRx/JCCAUxN1N0TbkSRxT21THSnaiBLWqIWlAAAAK3RSTlMAFirPNjYq/VkQnv1q0LLo/hCy4/GnWQxyOJPJ++uxnutqz+zjzPvM7NH7bJYaOgAAAi9JREFUeF5t0lVv5DAUgFEnGaadMjM3nGFmZqYyMzPzIvzldaJRd1T1vF1/uvKDDRogErFYgoBPIO0D2BcIG2j/2JuGMGliW5CQYkNNjU3SDFM8GHQ4gsE4zM2S/02M+WFyHAocMPsx8fsebHwKhQKBUIjPsNZ3m/rrLfAVCtRrv3BvR6dSOed6cQpNqM4X15xS2dkBQHdP6xtUud1Y2Hq2Wp+3FjZuK/xJa083MC2aGNpUKpl8i/cV6H7R5yuVSgwDA9D68LD+wmBYCV8zJoi5Dq8YDBf6MO7TgjZGz9by+d9/WBbXnpxocXY+l8+vsKyeaQNdI3qymstVSZLEz+/uznEyk8vlMiSpH+kCoj5892ckUozFYvi+1bqPx4qRSJWf+kRAPEgXPZ5XnU6XSR6dnR0lM68eT1an26UHxQBtMS6/fod2aYsrEHBZ6CI/6XBjCwqQsWhyuZjN1ui9Weeh0zm7R9ey2cxyMjqGAKAoeI1JyGI3869itlv4yegtKAAAst7CUtS7Zl+/Mm/H49vmq3X7mje6VOiVwYgMP6R3bLZyeVPqTyT80s1y2WbbST8MIwBSEVy6cPxjqbwpOD2dmUmnOUIFeHINwXGX8+zx5cE36ODmYYbjCI0cCFA1QXG/VrMk+QSRT385ilCjoE40lYL58cDtXnW7bx4pIjUlAu9QzXSKICiK4ygKpmkNChrIVerxVN24WiX/+KllionRycnRCYXs80+PikRoY/kH+Seiu7wDEXwAAAAASUVORK5CYII=',

        /* unsure */
        ':/': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAA7VBMVEUAAAD/nRD/nxL/mxD/kwr/wSb/tBz/hQP/hgP/uiD/uB//xSv/uiH/uSD/nQ//igX/hgP/hgT/ggH/wCb/wij/wCX/vCP/tR3/rBf/nQ//gAD/gQH/74P/xyz/207/wij/lQr/yjH/1ED/41//10X/4Fj/th7/zjb/nQ7/0Tr/7Xz/pBL/2Un/6G7/5mf/6nX/qhX/3VMwN1v/jAb/vCL/rxlCQUW3p1nx33Wxgyvqyk09EA7z1liKfUlHSFaVciiWYSRXIhFxPBjvrybMmDP25HUmJzuWjVaTi1+woVzXrDA5Cg7RoTfIpTnnoBuiSKu/AAAAHHRSTlMAFioQNtDp0f03Wehqzs5ZarLonsyysZ7jnp7MRbGrcgAAAbpJREFUeNpt0oOS7EAAheFYI6yR1rDHtrTCve//OHu61/hLqfqSNI0vmVYYWqbxR2Z0dJxAx0fRT7eTbsylFEJKHrtJ+6tZJ3FFFBsENYqiEp9Ynxa6XBZJt1RApS4pSu6GH9+5XDRArVaz2WyBG4K7b9/ap7HU1myjV5Xxqa0xSStFoq2GtJJihSb1GlL6p9qur7XqH6dMYKQ/XIzHNzDozXi80J9GwDOF3eXo9g4EvBvdLjWeqb/GwNlo1RtNFE7U0wzLifFfy8P6gb3e6hVXPY2V2LMMx6PYHLLs9e5fx7zv9ZakISrUcxRyKRqLh/Gk3cZc25Pxw6IhJFdonQ9ipdi7VhO1sIPK4sG5ZZjpMo15Rei9hagdUEbLaSz0YjhQKkVx9m+6Xq+nj7wCGwwvsM5MfVhW/LjZzp+e5mi3p4PysJ4Bmmml5el2u9tMD8/Ph+l0rwx/RVlW7wz/7zYHfB7HlKrPOnWWNVR2jlXrnX35LUinXmU5G4Qsn1Wr9Xq9o8NDtcp8C6Bz/D6Dv8dY33e+XLBcAH4NFOSsb1cz6wdBXxcEftb+eakzl1d5dHWZ+fvSW45jfZUXW/VUn+mRydoAAAAASUVORK5CYII=',

        /* kiss */
        ':*': 'iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAEGElEQVR42q2WA9DkQBCFz7Ztm3u2bdu2bdu2bdu2bdvOu/oqNfkvZ23VC2am+0tjsvH2uz8N8e9Dk4OH0opICbQhugdxzRhz3v7XT1NChtPaqOW0Nc5kbYl9WDsT3NCuRA8R14wxxxrW/j1ocshgWh+9vrbFOapdCS0dSiUdTisdzyidyCLENWPMsYa12GD7ZzBStTX2cgeE8zO5pHMFbV0shpx75lgDHBts8fF7sPXR0oon3Z+MCLxAAK6WlW5UcYkx5gwYG2zxga9fR2ZgPPHXoNv1vHSvqbn+BoytgeLzxzXbGHOZicwFu1nNC3K/lUsGzBoX1ESKz+/VlGKTf+pAar6JzMAetnfLQN2R4sOpKb6/aX3a+3upvL6/vHYsKKPHF5rbgMfdXDJQ5h+dqKJPF8pj50otvmF4AdlDG+PbHXkqp1iM0fltJVSmZB7FTZiFsw0F8qynI8YGdi2rXNnSCrFuwVi7e/GFT3zD8HqDrIo82aTzS+CwbrmUOVtpIaCrZtR0wYC3blZMYSN6vtGA9jnw5aQVBixv4tW0OsrBr4GkBqMknvJG3wXWq1vKycDoQVWQk5UrG7OL5sE3DFj2VlgW6a4DPJRHyDpRWtSO6IBxPnegLSCXGJs6vhGpdbqVWpJWgE6EMNgimhXSI27I887MQp92lRDSvuoiKmp0cE0T6W4n9HXToB/uR2pogLDcwC2ppbV5bC0tI62vIKDIOldPutaYjgQK5Jt9SBmscblktckuDcoi/NGlbqBJ6YpkEpqXXZpW3MiAXVDE9ccTlZGzFYApS0Ypfx6hT82SSaMT2ecu/u++rR00jd00U8IdtBZFkeakEEZIQ0oiAyXFxjkROVDGnyz1iLo/qZTQBeTaUbq01utEiRfZ26Kvv8nW9GgC+HG0R+pdyMiBkmac00zUinTSNDzE7SFxBBTgp+QpDOQb4JNYcS17L/b0U05jokqTEwEk/w6QaEkzQBqKSGgKoMBZD5AeAIhToF/rdbwEOho20iOvV9vgUEeAknMDRQCJnPrSBLQ53QcY0K22IUU5BLBfWJ2KEPkTUABG3DO+KkjozvBsaDff9a1BwS0DNSJqA8Tply8IIgb4ampEAeV8OHNo4fx2lBhC5yNEFZEBG+wrsD/331M3P8uBalQ4AUbUFuEQfQklYoBExpxmhBb3G8KFcLQ4cMjjE/0GK+uCOdBOPhKoh+9jDhRNCIYjIwPmIQABcNZwxvZCmYACtj2hv2NrY/tL6qZ8De3iOy1QDfQrjQyIcOQSY1Zvv8g1zzV2VndfH1/W9XmMffczljtS0otDwAb+E7HGwLDFxx9/JtJIRIsTF/wrMcca1mKD7T99CLNPeTmom/eDvKJcYow51vzGh/Cff+qT7s7ePIjrP/3U/wxv3ooMewuFGgAAAABJRU5ErkJggg==',

        /* pacman */
        ':v': 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuUlEQVR42oWTTUsCURSGI/oF/gIXrougICqCqMywrOxLHNI+qCYr1HWbCqKIaBHtWkYQQbsWtZAWlprpWDh9CC3aRLWLwplRY07vCGna1S48MMM9573nPffcCtZK+pt65XD3mRId+UzFOAKqEhl8k4LG3aS/0VBRamFTj8R4WuQpc+9lkrp2qFKgbQOxlcXJBiVi/dCC/iN9O0dSsP04J4KPKvnS/FQcGD120cQkR/s7zkKB+BRJF62EPOuPAM8qe2uFo9pGE/VZe/IW0BNYUGHVmytfCnU+sEp9DszT6qKNLo6mKXPnJjlsISlkekey/rd3HTayCb6DGTL322hzyV5YsjhLuAGCzVNW56vlq75s4M4aRzUNRhoatuRLvhnTkr9wKqfFswVCpmzwu+CmvW0HJXwu/HtIiQzg1K4XOdyjK3f3OgwOPC5oIgXNgrUTRgpTRMAM/L1zNA4WooowUv+fAI8qtOASw+PB3nhCEWzGUgJVQMyKxOzlphBCzsfkeXMdS8QAXgG63oGZH9VGNldBOj5DSnSIkucthBgNnvmYgB9QGTJgGVSW64kFHIIXoAIZiGC9+Dl/AyWLEfwY3fFdAAAAAElFTkSuQmCC',

        /* colonthree */
        ':3': 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAxlBMVEUAAAD1wzr1wzr1wzr1wzr1wzr5z1v3yEn2x0T1xD31xD32yEf3yUv2x0T2x0X1wzr4zVX1wzr713H1wzr71m9wa1RvalMvOEabjF34zVX713D60mPJsGb203D71m7ry234zFL50mP2yEdNUEzry26gkF6Ad1f10nDmx22Fe1j50F361Gn61nH2xUH4zlmwnGG8pmTVumtiYVhYWE/YvGphYVnBqmUyO0mDeViCeVw5QU9cW09ZWU/Cq2WThlu1omhgX1SUh1t1Z2lpAAAAEnRSTlMANg6l35r9rbD6nrPX5Pv67sldQHX/AAAAtUlEQVR4XlXPRY4DQRBE0ayuZjBENaOZmYbp/pey0rYszdv92AUxYXVMs2MJutO8AgyFp93aD/EQ+rzYNZ5qm0gs8PN74tofdlgIckOcX155eHv/QOhSAMRJykOaxEBALWC0rXiotiOgRQ7+cUjvA5MpZjNMJ0BfJ2MADFcYj7EaAgODhMoQ/V2On1/fETIliKTqNfOoLKN501OSr3TVerPM8+Vmrbr3M1I9SG4mDL3d1g3BcQUqUROm+lAtgwAAAABJRU5ErkJggg=='
    };



    /* TEMPLATE LIBRARY START HERE		*/
    /* -------------------------------> */
    /* BASIC LIBS*/
    var tn_query = new Object();
    var tn_blog = new Object();
    var tn_url = new Object();
    var tn_widget = new Array();
    var Top_Left_Ads = $(document).find('#HTML3');
    var Inner_Post_Ads = $(document).find('#HTML13');
    var Inner_Post_Ads_2 = $(document).find('#HTML23');

    /* BROWSERS */
    var is_Opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_Chrome = !!window.chrome && !is_Opera && !is_Edge;
    var is_Explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
    var is_Firefox = typeof window.InstallTrigger !== 'undefined';
    var is_Safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);



    /* BASIC FUNCTIONS */
    // all variables (include undefined variables) must be declared before.
    // var something; then func(something) is ok
    function is_set(variable) {
        return (typeof (variable) != 'undefined');
    }
    function is_enable(variable) {
        // if (typeof(variable) == 'undefined' || 
        // 	variable == 'true' || variable == true || variable == 'show' || variable == 'enable') {
        // 	return true;
        // }
        if (typeof (variable) == 'undefined') {
            return true;
        } else if (
            variable == 'false' ||
            variable == false ||
            variable == 'hide' ||
            variable == 'none' ||
            variable == 'no' ||
            variable == '0' ||
            variable == 0) {
            return false;
        }

        if (!isNaN(variable)) {
            return Number(variable);
        }

        return true;
    }
    function is_number(variable) {
        return (typeof (variable) != 'undefined' && !isNaN(variable));
    }
    function is_empty(variable) {
        if (typeof (variable) == 'undefined') {
            return true;
        }
        if (typeof (variable) == 'array') {
            return (!variable.length);
        }
        if (typeof (variable) == 'object') {
            for (var key in variable) {
                return false;
            }
            return true;
        }
        return (!variable);
    }
    function is_object(variable) {
        return (typeof (variable) == 'object');
    }
    function is_array(variable) {
        return (typeof (variable) == 'array');
    }
    function is_mixed(variable) {
        return (typeof (variable) == 'array' || typeof (variable) == 'object');
    }
    function is_string(variable) {
        return (typeof (variable) == 'string');
    }
    function is_viewing(elem) {
        return (($(window).scrollTop() + $(window).height()) >= $(elem).offset().top);
    }
    function is_label_url(url) {
        return (url.indexOf('/search/label/') != -1);
    }
    function get_canonicalUrl(url) {
        return url.split('?')[0].split('#')[0];
    }
    function get_file_in_url(url) {
        url = get_canonicalUrl(url).split('/');
        return url[url.length - 1];
    }
    function scroll_to(elem, delay) {
        if (!is_set(delay)) {
            delay = 300;
        }
        if (is_empty(elem) || $(elem).length == 0) {
            return;
        }

        $('html, body').stop().animate({
            scrollTop: $(elem).offset().top
        }, delay);
    }
    function select_all(elem) {
        $(elem).select();
        // Work around Chrome's little problem
        $(elem).mouseup(function () {
            // Prevent further mouseup intervention
            $(elem).unbind("mouseup");
            return false;
        });
    }
    // Returns a random integer between min and max (included min and max also)
    function randInt(min, max) {
        if (max == min) { return max; }
        if (max < min) { var temp = min; min = max; max = temp; }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function randNumStr() {
        var d = new Date();
        return d.getTime();
    }

    // https://css-tricks.com/snippets/php/find-urls-in-text-make-links/
    function get_urls(text) {
        return text.match/***/(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,20}(\/\S*)?/g)/***/;
    }

    /*STRING MASTER*/
    // uppercase first letter
    String.prototype.toCapitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    // replace all
    String.prototype.replaceAll = function (target, replacement) {
        return this.split(target).join(replacement);
    };

    // has, alias of indexof
    String.prototype.has = function (str) {
        return (this.indexOf(str) != -1);
    };

    // hasNo, alias of indexof ==-1
    String.prototype.hasNo = function (str) {
        return (this.indexOf(str) == -1);
    };
    function sneeit_unesc_entities(text) {
        return text
            .replaceAll('#039', "'")
            .replaceAll('&quot;', '"')
            .replaceAll('&gt;', '>')
            .replaceAll('&lt;', '<')
            .replaceAll('&amp;', '&');
    }

    // safe way to parse json string
    function str_to_json(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }

        return JSON.parse(str);
    }

    // get string between key arrays
    function get_str_between_arrays(original_text, open_keys, close_keys) {
        var found = false;
        for (var i = 0; i < open_keys.length; i++) {
            if (original_text.indexOf(open_keys[i]) != -1) {
                original_text = original_text.split(open_keys[i])[1];
                found = true;
            }
        }
        if (!found) {
            return '';
        }
        for (var i = 0; i < close_keys.length; i++) {
            original_text = original_text.split(close_keys[i])[0];
        }

        return original_text;
    }

    function is_image_src(url) {
        return (url.toLowerCase().match/***/(/\.(jpeg|jpg|gif|png)$/)/***/ != null);
    }
    function is_url(url) {
        return (url.has('.') && url.has('//') && url.has('http') && url.has(':'));
    }
    function txt_2_slug(text) {
        text = $.trim(text);
        text = text.toLowerCase();
        for (var i = 0; i < text.length; i++) {
            var ascii = text.charCodeAt(i);
            var isNum = ascii >= 48 && ascii <= 57;
            var isLet = ascii >= 97 && ascii <= 122;
            if (isLet || isNum && i != 0) {
                continue;
            }
            text = text.replaceAll(text[i], '-');
        }
        return text;
    }

    /*STORAGE*/
    // store content to web browser
    function included_cookie() {
        if ('cookie' in document) {
            return true;
        }
        return false;
    }
    function set_cookie(c_name, value, exdays) {
        if (!included_cookie()) {
            return false;
        }
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString()) + '; path=/';
        document.cookie = c_name + "=" + c_value;
        if (get_cookie(c_name) !== value) {
            return false;
        }
        return true;
    }
    function has_cookie() {
        if (set_cookie('test', 'ok')) {
            return true;
        }
        return false;
    }
    function get_cookie(c_name) {
        if (!included_cookie()) {
            return '';
        }
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
        return '';
    }
    function has_storage() {
        if (typeof (localStorage) !== "undefined") {
            return true;
        }
        return false;
    }
    function set_storage(key, value) {
        if (has_storage()) {
            localStorage.setItem(key, value);
            return true;
        }
        return false;
    }
    function get_storage(key) {
        if (has_storage()) {
            var ret = localStorage.getItem(key);
            if (ret) {
                return ret;
            }
        }
        return '';
    }
    function update_option(option_name, option_value) {
        if (has_storage()) {
            return set_storage(option_name, option_value);
        } else if (has_cookie()) {
            return set_cookie(option_name, option_value);
        }
        return false;
    }
    function get_option(option_name) {
        if (has_storage()) {
            return get_storage(option_name);
        } else if (has_cookie()) {
            return get_cookie(option_name);
        }
        return '';
    }

    /*SOCIAL*/
    function get_youtube_video_id(url) {
        if (url.indexOf('youtube') == -1 && url.indexOf('youtu.be') == -1) {
            return '';
        }
        return get_str_between_arrays(url, ['/embed/', 'youtu.be/', '/videos/', '/v/', '?v=', '&v='], ['#', '/', '?', '&', '.']);
    }

    function get_youtube_list_id(url) {
        if (url.indexOf('youtube') == -1 && url.indexOf('youtu.be') == -1) {
            return '';
        }
        return get_str_between_arrays(url, ['list='], ['#', '/', '?', '&', '.']);
    }

    function get_vimeo_video_id(url) {
        if (url.indexOf('vimeo') == -1) {
            return '';
        }
        return get_str_between_arrays(url, ['vimeo.com/', '/video/'], ['#', '/', '?', '&', '.']);
    }

    /*JQUERY EXTENSION*/
    // this function will help all tag_html become child of only parent_selector
    // not be wrapped by any other elements
    function unwrap_tag(tag_selector, parent_selector, tag_html) {
        for (i = 0; i < 100; i++) {
            // scan until not found any wrap
            var wrapped = false;
            // scan all 
            // console.log('WRAPPER TESTER');
            $(tag_selector).each(function () {
                var wrapper = $(this).parent();
                // console.log(wrapper);
                if (wrapper.length && (!wrapper.is(parent_selector))) {
                    // the tag_html was wrapped by an element
                    // example <div> ...somecontentA ... tag_html ...somecontentB ... </div>
                    // will	become <div> ...somecontentA ... </div>tag_html<div> ...somecontentB ... </div>
                    // we will escape until all tag_html stay underneath the post-body only
                    wrapped = true;

                    // so we duplicate the wrapper to wraper A and wraper B
                    var clone_wrapper = wrapper.clone();
                    clone_wrapper.insertAfter(wrapper);

                    // then we only get the first half of wrapper A and second half of wrapper B
                    // split each wrapper with tag_html
                    wrapper_html = wrapper.html();
                    index = wrapper_html.indexOf(tag_html);
                    wrapper.html(wrapper_html.substring(0, index));
                    clone_wrapper.html(wrapper_html.substring(index + tag_html.length));

                    // and then place our key into the midddle
                    $(tag_html).insertAfter(wrapper);
                }
            });

            if (!wrapped) {
                // escaped all wrapped tag_html, so move to next step
                return;
            }
        }
    }

    function apply_googleicon_tag(icon_code, precode = 'gis') {
        if (typeof (icon_code) === 'undefined' || !icon_code || icon_code.length < 3) {

            return '';
        }

        // strip tag
        icon_code = icon_code.trim().toLowerCase();
        if (icon_code.indexOf('<') != -1 && icon_code.indexOf('>')) {
            let tempEl = document.createElement('div');
            tempEl.innerHTML = icon_code;
            icon_code = tempEl.firstChild.classNames;
        }

        const skipClass = ['fas', 'fa-classic', 'fa-solid', 'far', 'fa-regular', 'fal', 'fa-light', 'fat', 'fa-thin', 'fab', 'fa-brands', 'fad', 'fa-classic', 'fa-duotone', 'fass', 'fa-sharp']
        let fullCode = false;
        for (let cl of skipClass) {
            if (icon_code.indexOf(cl) !== -1) {
                fullCode = true;
                break;
            }
        }

        if (!fullCode) {
            icon_code = icon_code.replaceAll('fa ', '');
            icon_code = icon_code.replaceAll('gi ', '');
            icon_code = icon_code.replaceAll('fa-', '');
            icon_code = icon_code.replaceAll('gi-', '');
            icon_code = precode + ' gi-' + icon_code;
        }
        else {
            icon_code = icon_code.replaceAll('fa-', 'gi-');
        }

        return '<i class="' + icon_code + '"></i>';
    }


    function replace_icon_marker(text) {
        var index = 0;
        for (var i = 0; i < 100; i++) {
            var icon_start = text.indexOf(ICON_MARKER, index);
            if (icon_start != -1) {
                var icon_end = text.indexOf(ICON_MARKER, icon_start + ICON_MARKER.length);
                if (icon_end != -1) {
                    var icon = apply_googleicon_tag(text.substring(icon_start + ICON_MARKER.length, icon_end));
                    text = text.substring(0, icon_start) + icon + text.substring(icon_end + ICON_MARKER.length);
                    index = icon_start + icon.length;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        return text;
    }


    /* WORDPRESS TO BLOGGER BASIC */
    function escape_url(text) {
        text = encodeURIComponent(text);
        return text.replaceAll('!', '%21').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('\'', '%27').replaceAll('~', '%7E');
    }
    function get_label_slug(label_url) {
        return get_canonicalUrl(label_url).split('/search/label/')[1];
    }
    function set_label_url(label_slug) {
        return '/search/label/' + label_slug;
    }
    function get_label_count(label_slug) {
        for (var i = 0; i < tn_blog.label.length; i++) {
            if (label_slug == tn_blog.label[i].slug) {
                return tn_blog.label[i].count;
            }
        }
        return 0;
    }
    function get_label_name(label_slug) {
        for (var i = 0; i < tn_blog.label.length; i++) {
            if (label_slug == tn_blog.label[i].slug) {
                return tn_blog.label[i].name;
            }
        }
        return label_slug;
    }

    // blogger page type indicator and status
    function is_item() {
        return ($('body.item').length != 0);
    }
    function is_preview() {
        return (tn_url.current.has('/b/'));
    }
    function is_home() {

        // return (tn_blog.canonicalUrl == tn_blog.canonicalHomepageUrl && (!is_item()) && !(is_preview()));
        return (tn_blog.canonicalUrl == tn_blog.canonicalHomepageUrl && !is_item());
    }
    function is_archive() {
        return ($('body.archive').length != 0 || is_set(tn_query['updated-min']));
    }
    function is_search() {
        return (tn_url.current.has('/search?') && is_set(tn_query['q']));
    }
    function is_label() {
        return (tn_url.current.has('/search/label/'));
    }
    function is_index() {
        return ($('body.index').length != 0 || is_archive());
    }
    function is_page() {
        return ($('body.static_page').length != 0)
            ;
    }
    function is_singular() {
        return (is_page() || is_item());
    }
    function is_mobile() {
        // return (is_set(tn_query['m']) && tn_query['m'] == 1);
        return tn_blog.isMobile;
    }
    function is_404() {
        return ($('body.error_page').length != 0);
    }
    function is_rtl() {
        return $('html[dir="rtl"]').length;
    }
    function is_iframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
    function esc_attr($a = '') {
        return $a.replaceAll('"', '&quot;').replaceAll('\'', '&#39;')
    }

    // check the current viewer is admin or not
    function you_are_admin() {
        if ($('.item-control').length) {
            return ($('.item-control').css('display') != 'none');
        }

        return false;
    }
    function get_label_name(slug_or_url) {
        if (slug_or_url.has('/search/label/')) {
            slug_or_url = get_label_slug(slug_or_url);
        }
        for (var i = 0; i < tn_blog.label.length; i++) {
            if (tn_blog.label[i].slug == slug_or_url) {
                return tn_blog.label[i].name;
            }
        }
        return false;
    }
    function get_label_count(slug_or_url) {
        if (slug_or_url.has('/search/label/')) {
            slug_or_url = get_label_slug(slug_or_url);
        }
        for (var i = 0; i < tn_blog.label.length; i++) {
            if (tn_blog.label[i].slug == slug_or_url) {
                return tn_blog.label[i].count;
            }
        }
        return false;
    }

    /* LICENSE */
    function _0x5e4196() {
        if (tn_url.current.has('cache')) return true;
        if (typeof (window['SNEEIT_LICENSE']) == 'undefined') {
            return false;
        }
        /* get code if input is a full template XML code */
        var code = window['SNEEIT_LICENSE'];


        /* get pattern */
        code = code.split('-');

        var pattern = new Array();
        for (var i = 1; i < code.length; i++) {
            pattern[i - 1] = code[i][0] + code[code.length - i][1];
        }

        /* extract parts */
        /* - remove patterns */
        for (var i = 1; i < code.length; i++) {
            code[i] = code[i].substr(2);
        }
        code = code.join('');

        /* - split left, right, core */
        var left = '';
        var right = '';
        var core = '';
        var start_core = -1;
        var end_core = -1;
        for (var i = 0; i < code.length - 1; i += 2) {
            var pat = code[i] + code[i + 1];

            for (var j = 0; j < pattern.length; j++) {
                var invert_pat = pattern[j][1] + pattern[j][0];
                var orginal_pat = pattern[j];

                if (pat == invert_pat && start_core == -1) {

                    start_core = i;
                    break;
                }

                if (pat == orginal_pat && start_core != -1 && end_core == -1) {

                    end_core = i;
                    break;
                }
            }
            /* found the core */
            if (start_core != -1 && end_core != -1) {
                left = code.substring(0, start_core);
                core = code.substring(start_core, end_core);
                right = code.substring(end_core);
                break;
            }
        } /* end for it to scan left, right and core part*/



        /* extract core */
        var core_number = 0;
        for (var i = 0; i < core.length - 1; i += 2) {
            var pat = core[i + 1] + core[i];
            var index = pattern.indexOf(pat);
            if (index == -1) {
                break;
            }
            core_number = core_number * 10 + index;
        } /* end of extract core */


        /* get the final string */
        if (core_number > 3) {
            core = core_number.toString(2);

            /* remove the first 1 value */
            core = core.substring(1);


            /* get host string */
            var host = '';
            for (var i = 0; i < core.length; i++) {
                var pat = '';
                if (core[i] == '1') {
                    pat = right.substring(0, 4);
                    right = right.substring(4);
                } else {
                    pat = left.substring(0, 4);
                    left = left.substring(4);
                }
                if (!pat) {
                    break;
                }
                host += pat;
            }


            /* convert host string to host number */
            var host_number = '';
            for (var i = 0; i < host.length - 1; i += 2) {
                var pat = host[i] + host[i + 1];
                var index = pattern.indexOf(pat);
                if (index == -1) {
                    break;
                }
                host_number += index;
            }


            /* convert host number to real host name*/
            host = '';
            for (var i = 0; i < host_number.length - 1; i += 2) {
                host += String.fromCharCode(Number(host_number[i] + host_number[i + 1]) + 37);
            }

            if (host.indexOf('.blogspot.') != -1) {
                host = host.split('.blogspot.');
                host = host[0] + '.com';
            }

            if (host.indexOf('www.') != -1) {
                host = host.split('www.');
                host = host[1];
            }

            if (host.indexOf('//') != -1) {
                host = host.split('//');
                host = host[1];
            }

            if (host.lastIndexOf('.') != -1) {
                host = host.substring(0, host.lastIndexOf('.'));
            }


            var current_host = window.location.hostname;
            if (current_host.indexOf('.blogspot.') != -1) {
                current_host = current_host.split('.blogspot.');
                current_host = current_host[0] + '.com';
            }

            if (current_host.indexOf('www.') != -1) {
                current_host = current_host.split('www.');
                current_host = current_host[1];
            }

            if (current_host.indexOf('//') != -1) {
                current_host = current_host.split('//');
                current_host = current_host[1];
            }

            if (current_host.lastIndexOf('.') != -1) {
                current_host = current_host.substring(0, current_host.lastIndexOf('.'));
            }

            // console.log(host, current_host);
            return (host == current_host);
        } /* end if of get final string*/
    }


    /* AD SHOWING */
    /* ------------------------------------ */
    var ADS_CHECK_SIZE_TIME = 5;
    /* TOP LEFT POST ADS */
    // if not enabled post ads
    if ($('.post-ads').length == 0 || Top_Left_Ads.length == 0 || Top_Left_Ads.is(':empty')) {
        $('.post-body').addClass('wide-right');
        $('.post-ads').remove();
        Top_Left_Ads.remove();
    } else if (Top_Left_Ads.text().indexOf('script') == -1 &&
        Top_Left_Ads.text().indexOf('iframe') == -1 ||
        Top_Left_Ads.text().indexOf('<') == -1) {
        Top_Left_Ads.appendTo($('.post-ads'));
        Top_Left_Ads.css('visibility', 'visible');
    } else {
        // monitor size of ads until stable ADS_CHECK_SIZE_TIME times
        var Top_Left_Ads_Height = 0;
        var Top_Left_Ads_Prev_Height = 0;
        var Top_Left_Ads_Stable = 0;
        var Top_Left_Ads_Zero = 0;
        Top_Left_Ads.css('visibility', 'hidden');
        var Top_Left_Ads_Monitor = setInterval(function () {
            Top_Left_Ads_Height = Top_Left_Ads.height();
            if (!Top_Left_Ads_Height) {
                Top_Left_Ads_Zero++;
                if (Top_Left_Ads_Zero >= ADS_CHECK_SIZE_TIME) {
                    $('.post-body').addClass('wide-right');
                    $('.post-ads').remove();
                    Top_Left_Ads.remove();
                    clearInterval(Top_Left_Ads_Monitor);
                }
                return;
            }
            if (Top_Left_Ads_Height != Top_Left_Ads_Prev_Height) {
                Top_Left_Ads_Prev_Height = Top_Left_Ads_Height;
                Top_Left_Ads_Stable = 0;
                return;
            } else {
                Top_Left_Ads_Stable++;
            }

            if (Top_Left_Ads_Stable >= ADS_CHECK_SIZE_TIME) {
                clearInterval(Top_Left_Ads_Monitor);

                // stabled ads, now we move it to the ads spot
                Top_Left_Ads.appendTo($('.post-ads'));
                Top_Left_Ads.css('visibility', 'visible');
            }
        }, DELAY_AD_LOAD);
    }

    /* BASIC QUERIES 
    Please transfer to 
    
    // Get the search string from the URL
    const searchParams = new URLSearchParams(window.location.search);
    
    // Get the value of a specific parameter
    const paramValue = searchParams.get('paramName');
    
    to prevent error-prone code to happen
    */
    // Fill tn_query
    var uri = window.location.search;
    if (!is_empty(uri)) {
        uri = uri.substring(1);// remove ?
        var list = uri.split('&');
        for (var i = 0; i < list.length; i++) {
            var l = list[i].split('=');
            if (l.length > 1) {
                tn_query[l[0]] = l[1];
            }

        }
    }



    // fill tn_url
    tn_url.current = window.location.href;
    tn_url.hash = window.location.hash;
    tn_url.feed = '/feeds';
    tn_url.referrer = document.referrer;
    tn_url.protocol = window.location.protocol;



    // fill tn_blog
    tn_blog.totalPosts = -1;
    tn_blog.totalComments = -1;
    tn_blog.isMobile = (window.location.href.indexOf('m=1') != -1);
    tn_blog.languageDirection = $('#global-blogger-data .languageDirection').html();
    tn_blog.pageType = $('#global-blogger-data .pageType').html();
    tn_blog.pageTitle = $('#global-blogger-data .pageTitle').html();
    tn_blog.pageName = $('#global-blogger-data .pageName').html();
    tn_blog.metaDescription = $('#global-blogger-data .metaDescription').html();
    tn_blog.postImageUrl = $('#global-blogger-data .postImageUrl').html();
    tn_blog.postImageThumbnailUrl = $('#global-blogger-data .postImageThumbnailUrl').html();
    tn_blog.title = $('#global-blogger-data .title').html();
    tn_blog.url = $('#global-blogger-data .url').html();
    tn_blog.homepageUrl = $('#global-blogger-data .homepageUrl').html();
    tn_blog.canonicalHomepageUrl = $('#global-blogger-data .canonicalHomepageUrl').html();
    // tn_blog.homepageUrl = tn_blog.canonicalHomepageUrl; // we use this to prevent Blogger adding m=0/1 to the url
    tn_blog.canonicalUrl = $('#global-blogger-data .canonicalUrl').html();
    tn_url.canonical = tn_blog.canonicalUrl;
    // we use this to prevent Blogger adding m=0/1 to the url
    tn_blog.homepageUrl = new URL(tn_blog.homepageUrl);
    tn_blog.homepageUrl = tn_blog.homepageUrl.origin + tn_blog.homepageUrl.pathname;


    tn_blog.enabledCommentProfileImages = Boolean($('#global-blogger-data .enabledCommentProfileImages').html());
    tn_blog.blogId = $('#global-blogger-data .blogId').html();
    tn_blog.postId = $('.post-id').attr('data-id');
    tn_blog.bloggerCommentNumber = $('.blogger-comments-title').attr('data-comment_number');
    if (isNaN(tn_blog.bloggerCommentNumber)) {
        tn_blog.bloggerCommentNumber = 0;
    } else {
        tn_blog.bloggerCommentNumber = Number(tn_blog.bloggerCommentNumber);
    }
    tn_blog.encoding = $('#global-blogger-data .encoding').html();


    tn_blog.label = new Array();
    if (tn_blog.homepageUrl.lastIndexOf('/') == tn_blog.homepageUrl.length - 1) {
        tn_blog.homepageUrl = tn_blog.homepageUrl.substring(0, tn_blog.homepageUrl.length - 1);
    }



    // all link in m=0 should also has m=0
    if (tn_query['m']) {
        $(document).on('mousedown', 'a', function () {
            let href = $(this).attr('href');

            if (!href) return true;
            let host = location.host
            if (href.indexOf('//') == -1) return true;
            if (href.indexOf(host) == -1) return true;

            // Get the current URL
            const url = new URL(href);

            // Add the new parameter to the search params
            url.searchParams.set('m', tn_query['m']);

            // Navigate to the new URL
            if (url.href == href) return;
            $(this).attr('href', url.href);
        })
    }



    /* Get Blog Labels name/Url/Count from Widget:Label100*/
    $('#magone-labels').each(function () {
        var labels = $(this).text();
        labels = labels.split(',');

        for (var i = 0; i < labels.length - 1; i += 2) {
            var item = new Object();
            item.name = labels[i];
            item.count = Number(labels[i + 1]);
            item.slug = escape_url(item.name);
            item.url = tn_blog.homepageUrl + '/search/label/' + item.slug;
            item.url = item.url.replace('http:', tn_url.protocol).replace('https:', tn_url.protocol);
            tn_blog.label.push(item);
        }
    });
    // console.log(tn_blog.label);

    tn_blog.labelNumber = tn_blog.label.length;
    // resort label list by decreasing count
    if (!is_empty(tn_blog.label)) {
        for (var i = 0; i < tn_blog.label.length - 1; i++) {
            for (var j = i + 1; j < tn_blog.label.length; j++) {
                if (tn_blog.label[i].count < tn_blog.label[j].count) {
                    var temp = tn_blog.label[i];
                    tn_blog.label[i] = tn_blog.label[j];
                    tn_blog.label[j] = temp;
                }
            }
        }
    }
    tn_blog.postLabel = new Array();
    $('.post-label-data').each(function () {
        let url = $(this).attr('data-href').replace('http:', tn_url.protocol).replace('https:', tn_url.protocol);
        if (!url) return;
        url = new URL(url);
        url = url.origin + url.pathname;
        tn_blog.postLabel.push(url);
    });


    if (is_set(tn_query['zx']) || is_iframe()) {
        tn_url.feed = 'https://www.blogger.com/feeds/' + tn_blog.blogId;
    }
    tn_url.host = window.location.hostname;
    tn_url.name = tn_url.host.replace('www.', '').replace('http://', '').replace('https://', '');
    tn_url.path = window.location.pathname;




    /*IMAGE MASTER*/
    /*
    You must make sure your image container has class name .item-thumbnail and add below css into your style sheet.
    
    .item-thumbnail *, .item-thumbnail img {display:block;max-width: 9999px; max-height: 9999px; padding: 0!important;}
    .item-thumbnail {overflow: hidden;display: block;z-index:9;}
    */
    function optimize_thumbnail(images, must_load = true) {
        if (typeof (images) != 'object') {
            images = $('.item-thumbnail img');
        }
        images.each(function () {
            let parent = $(this).parent();
            if (!parent.is('.item-thumbnail') || parent.is('optimized')) return;
            var src = $(this).attr('src');
            if (src == null) return;

            if ((src.indexOf('youtube.com') != -1) && (src.indexOf('/default.') != -1)) {
                src = src.replace('/default.', '/hqdefault.');
            }
            let max_size = Math.ceil(Math.max(parent.width(), parent.height()));
            var src = b_resize_image(src, max_size * 2, false, must_load);

            // since 6.9.47
            // instead of add a fix image here, we replace add background to the thumbnail a		
            // parent.css('background-image', 'url("'+src+'")').addClass('optimized');
            $(this).attr('src', src);
            parent.addClass('optimized');
        });
    }

    optimize_thumbnail();


    $(window).resize(function () {
        // optimize_thumbnail();	
    });




    // resize image
    // if missing size, retrun full (1600)
    // size can be string, ex: 300x500, w400, h300
    function b_resize_image(src, size = null, crop = false, must_load = false) {

        // only work with picasa / google photo images
        if (src.indexOf('.blogspot.com') == -1 && src.indexOf('.googleusercontent.com') == -1) {
            return src;
        }

        // src should be https for every hosted image
        src = src.replace('http://', 'https://');


        // process to get width and height
        var width = 0;
        var height = 0;
        var current_width = 0;
        var current_height = 0;
        var current_size = 0;
        var original_src = src;
        var replace_to_webp = !is_Safari && REPLACE_IMAGE_TO_WEBP;

        // square image
        if (is_number(size)) {
            width = height = Math.ceil(Number(size));
        }
        // specific width and height image
        else if (is_string(size)) {
            if (size.indexOf('x') !== -1) {
                var sizes = size.split('x');
                width = sizes[0];
                height = sizes[1];
                if (is_number(width) && is_number(height)) {
                    width = Math.ceil(Number(width));
                    height = Math.ceil(Number(height));
                }
            } else if (size.indexOf('w') != -1 && is_number(size.replace('w', ''))) {
                width = Math.ceil(Number(size.replace('w', '')));
            } else if (size.indexOf('h') != -1 && is_number(size.replace('h', ''))) {
                height = Math.ceil(Number(size.replace('h', '')));
            } else {
                return original_src;
            }
        }
        // missing width and height, no need to resize	
        else if (!replace_to_webp) {
            return original_src;
        }

        // can not resize if zero in width or height
        if (width == height && width == 0 && !replace_to_webp) {
            return src;
        }

        // scan and find image size position in src	
        // image with blogspot format
        var glue = '/';
        if (src.indexOf('=') != -1 && src.indexOf('.googleusercontent.com') != -1) {
            glue = '=';
        }

        src = src.split(glue);

        for (var i = 0; i < src.length; i++) {
            // size data can't be longer than 17
            if (src[i].length > 17) {
                continue;
            }
            // seem this split has an image size data inside
            if (src[i].has('-c') || src[i].has('s') || src[i].has('h') || src[i].has('w')) {
                var src_size = src[i].split('-');
                src_size = src_size[0];
                src_size = src_size.replace('c', '').replace('s', '').replace('h', '').replace('w', '');

                if (src_size != '' && !isNaN(src_size)) {
                    if (src[i].has('s')) {
                        current_size = Number(src_size);
                    } else if (src[i].has('h')) {
                        current_height = Number(src_size);
                    } else if (src[i].has('w')) {
                        current_width = Number(src_size);
                    }
                    break;
                }
            }
        }

        // and then change src structure to replace our width and height into the image src
        if (i < src.length) {
            if (replace_to_webp && (width == height && height == 0 || size == null)) {
                // do nothing just replace
            } else if (width == height) {
                // we will not return the new value if the resize is smaller
                if (width < current_size && (!must_load)) {
                    return original_src;
                }
                src[i] = 's' + width; // simple resize
            } else if (height == 0) { // missing height
                if (width < current_width && (!must_load)) {
                    return original_src;
                }
                src[i] = 'w' + width;
            } else if (width == 0) { // missing width
                if (height < current_height && (!must_load)) {
                    return original_src;
                }
                src[i] = 'h' + height;
            } else {
                if ((height < current_height || width < current_width) && (!must_load)) {
                    return original_src;
                }
                src[i] = 'w' + width + '-' + 'h' + height;
            }

            if (crop) {
                src[i] += '-c';
            }

            // we convert all hosted image to .webp so 
            // we need rewrite to reduce size
            if (replace_to_webp) {
                src[i] += '-rw';
            }
        }

        src = src.join(glue);


        // change all extension to .webp to save the data	
        if (replace_to_webp) {
            var replace_exts = ['png', 'gif', 'jpge', 'jpg', 'bmp'];
            for (var i = 0; i < replace_exts.length; i++) {
                src = src.replace('.' + replace_exts[i], '.webp');
                src = src.replace('.' + replace_exts[i].toUpperCase(), '.webp');
            }
        }


        return src;
    }


    // get first image from content
    function b_get_first_image(content) {
        var src = '';
        var key0 = '\u003cimg ';
        var key1 = 'src\u003d\"';
        var key2 = '\"';


        // normal third party image
        index0 = content.indexOf(key0);
        if (index0 != -1) {

            index1 = content.indexOf(key1, index0);
            if (index1 == -1) {
                key1 = 'src\u003d\'';
                key2 = '\'';
                index1 = content.indexOf(key1, index0);
            }
            if (index1 != -1) {

                index2 = content.indexOf(key2, index1 + key1.length);
                if (index2 != -1) {

                    src = content.substring(index1 + key1.length, index2);

                }
            }
        }


        // youtube image old version
        if (!src) {
            key0 = 'data-thumbnail-src\u003d\"';
            key1 = '\"';
            index0 = content.indexOf(key0);
            if (index0 != -1) {
                index1 = content.indexOf(key1, index0 + key0.length);
                if (index0 != -1) {
                    src = content.substring(index0 + key0.length, index1);
                }
            }
        }

        // youtube image iframe version
        if (!src) {
            var key0 = 'youtube-nocookie.com/embed/';
            var key1 = 'youtube.com/embed/';
            var key2 = 'youtube.com/watch?v=';
            var key3 = 'youtu.be/';
            var key_start = key0;
            var key_end = '"';

            // find start point
            var start = content.indexOf(key_start);
            if (start == -1) {
                key_start = key1;
                start = content.indexOf(key_start);
                if (start == -1) {
                    key_start = key2;
                    start = content.indexOf(key_start);
                    if (start == -1) {
                        key_start = key3;
                        start = content.indexOf(key_start);
                    }
                }
            }

            // then end point
            if (start != -1) {
                var end = content.indexOf(key_end, start);

                // now we can get tail of src
                if (end != -1) {
                    src = content.substring(start + key_start.length, end);

                    // sanitize it and create src
                    if (src.indexOf('?') != -1) {
                        src = src.substring(0, src.indexOf('?'));
                    }
                    if (src.indexOf('&') != -1) {
                        src = src.substring(0, src.indexOf('&'));
                    }
                    src = 'https://img.youtube.com/vi/' + src + '/hqdefault.jpg';
                }
            }
        }

        // replace all http method to https
        if (src.has('.blogspot.com/')) {
            src = src.replace('http://', '//');
        }

        return src;
    }

    /*BLOGGER MASTER*/
    /*blogger json*/
    /*Other way to get json:
    http://magonedemo.blogspot.com/search?action=getTitles&widgetId=BlogArchive1&widgetType=BlogArchive&responseType=js&path=http%3A%2F%2Fmagonedemo.blogspot.com%2F2015_05_01_archive.html*/
    function b_valid_json(json) {
        // bad json
        if (typeof (json) == 'undefined' || typeof (SNEEIT_LICENSE) == 'undefined') {
            return false;
        }

        // empty json
        if (!('feed' in json)) {
            // the ajax done but not transfer,
            // so we must get response text
            // and convert to json manually
            if ('responseText' in json) {
                temp = json.responseText;
                if (temp.indexOf('({"version":') == -1) {
                    return false;
                }
                start = temp.indexOf('({"version":');
                if (temp.indexOf('}});') == -1) {
                    return false;
                }
                end = temp.indexOf('}});');
                temp = temp.substring(start + 1, end + 2);
                return str_to_json(temp);
            } else {
                return false;
            }
        }
        return json;
    }

    /*
    this.id
    this.cate = new Array();
    this.title = '';
    this.subtitle = '';
    this.admin = new Object();
    this.admin.name = 'Anonymous';
    this.admin.uri = '';
    this.admin.avatar = 'http://img1.blogblog.com/img/anon36.png';
    this.total_entry = Number(json.feed.openSearch$totalResults.$t);
    this.start_index = Number(json.feed.openSearch$startIndex.$t);
    this.item_per_page = Number(json.feed.openSearch$itemsPerPage.$t);
    this.entry_number = 0;
    this.entry = new Array();
        .id = entry.id.$t;
        .published = '';
        .cate = new Array();
        .title = '';
        .content = '';
        .summary = '';
        .link = '';
        .reply_label = 'comments';
        .author = new Object();
        .author.name = 'Anonymous';
        .author.uri = '';
        .author.avatar = 'http://img1.blogblog.com/img/anon36.png';
        .thumbnail = b_get_first_image(temp.content);
        .format
        .reply_number = 0;
        .reply_to = '';
        .reply_json = '';
        .reply_title = '';
        .pid = '';
        .pid = temp.pid.replace('pid-', '');	
    */
    /**
     * 
    yy = short year
    yyyy = long year
    M = month (1-12)
    MM = month (01-12)
    MMM = month abbreviation (Jan, Feb ... Dec)
    MMMM = long month (January, February ... December)
    d = day (1 - 31)
    dd = day (01 - 31)
    ddd = day of the week in words (Monday, Tuesday ... Sunday)
    E = short day of the week in words (Mon, Tue ... Sun)
    D - Ordinal day (1st, 2nd, 3rd, 21st, 22nd, 23rd, 31st, 4th...)
    h = hour in am/pm (0-12)
    hh = hour in am/pm (00-12)
    H = hour in day (0-23)
    HH = hour in day (00-23)
    mm = minute
    ss = second
    SSS = milliseconds
    a = AM/PM marker
    p = a.m./p.m. marker
     */
    function b_format_date(dateString, format = '') {
        if (!format) {
            format = FORMAT_DATE ? FORMAT_DATE : 'MMM dd, yyyy';
        }
        dateString = dateString.split('T')[0];
        let date = new Date(dateString);
        let sep = 'SNEEIT';
        // replace to prevent collisions from replacing text in names
        let ret = format
            .replace('yyyy', '[hhhh]')
            .replace('yy', '[hh]')
            .replace('E', '[3]')
            .replace('ddd', '[bbb]')
            .replace('dd', '[bb]')
            .replace('d', '[b]')
            .replace('D', '[C]')
            .replace('MMMM', '[WWWW]')
            .replace('MMM', '[WWW]')
            .replace('MM', '[WW]')
            .replace('M', '[W]')
        const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        const monNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        ret = ret.replace('[hhhh]', date.getFullYear());
        ret = ret.replace('[hh]', date.getFullYear() % 1000);

        ret = ret.replace('[3]', trans(dayNames[date.getDay()].substring(0, 3)));
        ret = ret.replace('[bbb]', trans(dayNames[date.getDay()]));
        ret = ret.replace('[bb]', (date.getDate() > 9 ? '' : '0') + date.getDate());
        ret = ret.replace('[b]', date.getDate());

        ret = ret.replace('[C]', date.getDate() + (
            [1, 21, 31].includes(date.getDate()) ? 'st' :
                ([2, 22].includes(date.getDate()) ? 'nd' :
                    ([3, 23].includes(date.getDate()) ? 'rd' : 'th'))
        ));


        ret = ret.replace('[WWWW]', trans(monNames[date.getMonth()]))
        ret = ret.replace('[WWW]', trans(monNames[date.getMonth()].substring(0, 3)))
        ret = ret.replace('[WW]', (date.getMonth() >= 9 ? '' : '0') + (date.getMonth() + 1));
        ret = ret.replace('[w]', date.getMonth() + 1);

        return ret;
    }
    function b_parse_json(json, summary_len, default_thumbnail, date_format) {
        // if (typeof(date_format) == 'undefined') {
        // 	if (typeof(DATE_FORMAT) != 'undefined') {
        // 		var date_format = DATE_FORMAT;
        // 	} else {
        // 		var date_format = 'MMM dd, yyyy';
        // 	}
        // }
        if (typeof (json) == 'undefined' || typeof (SNEEIT_LICENSE) == 'undefined') {
            return false;
        }

        if (typeof (summary_len) == 'undefined') {
            var summary_len = 500;
        }
        if (typeof (default_thumbnail) == 'undefined') {
            if (typeof (DEFAULT_POST_THUMBNAIL) != 'undefined') {
                var default_thumbnail = DEFAULT_POST_THUMBNAIL;
            } else {
                var default_thumbnail = 'https://lorempixel.com/640/300/';
            }
        }


        var imgkey = '\u003cimg ';

        this.id = json.feed.id.$t;
        var key = 'blog-';
        var index = this.id.indexOf(key);
        this.id = this.id.substring(index + key.length);
        this.id = this.id.replace('.comments', '');

        this.cate = new Array();
        if ('category' in json.feed) {
            for (i = 0; i < json.feed.category.length; i++) {
                this.cate[i] = json.feed.category[i].term;
            }
        }

        this.title = '';
        if ('title' in json.feed) {
            this.title = json.feed.title.$t;
        }
        this.title_attr = esc_attr(this.title);

        this.subtitle = '';
        if ('subtitle' in json.feed) {
            this.subtitle = json.feed.subtitle.$t;
        }

        this.admin = new Object();
        this.admin.name = 'Anonymous';
        this.admin.uri = '';
        this.admin.avatar = 'https://img1.blogblog.com/img/anon36.png';
        if ('name' in json.feed.author[0]) {
            this.admin.name = json.feed.author[0].name.$t;
        }
        if ('uri' in json.feed.author[0]) {
            this.admin.uri = json.feed.author[0].uri.$t;
        }
        if ('gd$image' in json.feed.author[0]) {
            if (json.feed.author[0].gd$image.src != 'https://img1.blogblog.com/img/blank.gif') {
                this.admin.avatar = json.feed.author[0].gd$image.src;
            }
        }
        this.total_entry = Number(json.feed.openSearch$totalResults.$t);
        this.start_index = Number(json.feed.openSearch$startIndex.$t);
        this.item_per_page = Number(json.feed.openSearch$itemsPerPage.$t);
        this.entry_number = 0;
        if ('entry' in json.feed) {
            this.entry_number = json.feed.entry.length;
        }
        this.entry = new Array();
        for (i = 0; i < this.entry_number; i++) {
            this.entry[i] = new Object();
            var temp = new Object();
            var entry = json.feed.entry[i];

            temp.id = entry.id.$t;
            key = 'post-';
            index = temp.id.indexOf(key);
            temp.id = temp.id.substring(index + key.length);

            temp.published = '';
            if ('published' in entry) {
                temp.published = entry.published.$t;
            }

            temp.cate = new Array();
            if ('category' in entry) {
                for (j = 0; j < entry.category.length; j++) {
                    temp.cate[j] = entry.category[j].term;
                }
            }

            temp.title = '';
            if ('title' in entry) {
                temp.title = entry.title.$t;
            }
            temp.title_attr = esc_attr(temp.title);

            temp.content = '';
            if ('content' in entry) {
                temp.content = entry.content.$t;
            }

            temp.summary = '';
            if ('summary' in entry) {
                temp.summary = entry.summary.$t;
            }

            if (temp.content) {
                temp.summary = temp.content;
            } else if ('summary' in entry) {
                temp.summary = entry.summary.$t;
            }
            if (temp.content == '') {
                temp.content = temp.summary;
            }
            if (temp.summary) {
                temp.summary = temp.summary.replace/***/(/<noscript\b[^>]*>(.*?)<\/noscript>/g,/***/ '');
                temp.summary = temp.summary.replace/***/(/<script\b[^>]*>(.*?)<\/script>/g,/***/ '');
                temp.summary = temp.summary.replace/***/(/<\S[^>]*>/g,/***/ '');
            }

            if (temp.summary.length > summary_len) {
                temp.summary = temp.summary.substring(0, summary_len) + '...';
            }

            temp.link = '';
            temp.parentId = '';
            temp.reply_label = 'comments';
            if ('link' in entry) {
                for (j = 0; j < entry.link.length; j++) {
                    if (entry.link[j].rel == 'alternate') {
                        temp.link = entry.link[j].href;
                    }
                    if (entry.link[j].rel == 'replies') {
                        temp.reply_label = entry.link[j].title;
                    }
                    if (entry.link[j].rel == 'related') {
                        temp.parentId = entry.link[j].href;
                        temp.parentId = temp.parentId.split('/comments/default/')[1];
                    }
                }
            }

            temp.author = new Object();
            temp.author.name = 'Anonymous';
            temp.author.uri = '';
            temp.author.avatar = 'https://img1.blogblog.com/img/anon36.png';
            a0 = entry.author[0];
            if ('name' in a0) {
                temp.author.name = a0.name.$t;
            }
            if ('uri' in a0) {
                temp.author.uri = a0.uri.$t;
            }
            if ('gd$image' in a0) {
                if (a0.gd$image.src != 'https://img1.blogblog.com/img/blank.gif') {
                    temp.author.avatar = a0.gd$image.src;
                }
            }
            temp.thumbnail = b_get_first_image(temp.content);

            temp.has_thumbnail = true;
            if (temp.thumbnail == '' && 'media$thumbnail' in entry) {
                temp.thumbnail = entry.media$thumbnail.url;
            }
            if (temp.thumbnail == '') {
                temp.thumbnail = default_thumbnail;
                temp.has_thumbnail = false;
            }


            temp.format = 'standard';
            if (temp.content.indexOf('youtube.com/embed') != -1 ||
                temp.content.indexOf('youtube-nocookie.com/embed/') != -1 ||
                temp.content.indexOf('player.vimeo.com') != -1 ||
                temp.content.indexOf('dailymotion.com/embed') != -1) {
                temp.format = 'video';
            }
            else if (temp.content.split(imgkey).length > 3) {
                temp.format = 'image';
            } else if (temp.content.indexOf('soundcloud.com/player') != -1) {
                temp.format = 'audio';
            }


            temp.reply_number = 0;
            if ('thr$total' in entry) {
                temp.reply_number = Number(entry.thr$total.$t);
            }
            temp.reply_label = temp.reply_label.replace(temp.reply_number + ' ', '');

            temp.reply_to = '';
            temp.reply_json = '';
            temp.reply_title = '';
            if ('thr$in-reply-to' in entry) {
                temp.reply_to = entry['thr$in-reply-to'].href;
                temp.reply_json = entry['thr$in-reply-to'].source;
                temp.reply_json = temp.reply_json.replace('/default/', '/summary/');
                temp.reply_json = temp.reply_json + '?alt=json-in-script';
            }

            temp.pid = '';
            temp.itemClass = '';
            temp.displayTime = '';
            if ('gd$extendedProperty' in entry) {
                for (j = 0; j < entry.gd$extendedProperty.length; j++) {
                    if (entry.gd$extendedProperty[j].name == 'blogger.itemClass') {
                        temp.pid = entry.gd$extendedProperty[j].value;
                        temp.itemClass = temp.pid;
                    }
                    if (entry.gd$extendedProperty[j].name == 'blogger.displayTime') {
                        temp.displayTime = entry.gd$extendedProperty[j].value;
                    }
                }
            }
            temp.pid = temp.pid.replace('pid-', '');

            this.entry[i] = temp;
        }
    }


    /*WIDGET MASTER*/
    /*
    Blogger widget title is allow 99 characters only
    widget title decoration rules:
        title_ will show title with border-bottom
        [title] will show a box around title text
        [title]_ will show a box around title text and border-bottom	
        |title hight ligh head of title
        /gi-code/ title will show title with icon at beginning
    */
    function widget_title_decor(widget, title) {
        var pre_title = title.split('$')[0];
        if (is_empty(pre_title)) {
            return title;
        }
        var raw_title = pre_title;
        if (raw_title.has('/fa') || raw_title.has('/gi')) {
            let start_1 = raw_title.indexOf('/fa');
            let start_2 = raw_title.indexOf('/gi');
            let start = Math.max(start_1, start_2);
            let end = raw_title.indexOf('/', start + 2);
            if (end > start) {
                raw_title = raw_title.substring(0, start) + apply_googleicon_tag(raw_title.substring(start + 1, end)) + raw_title.substring(end + 1);
            }

        }

        var decorated = false;
        // this is border-bottom title
        if (raw_title.indexOf('_') == raw_title.length - 1) {
            decorated = true;
            widget.addClass('under-title');
            raw_title = raw_title.substring(0, raw_title.length - 1);
        }

        // this is box
        if (raw_title.indexOf('[') == 0) {
            if (raw_title.indexOf(']') == raw_title.length - 1) {
                decorated = true;
                widget.addClass('box-title');
                raw_title = raw_title.substring(1, raw_title.length - 1);
            }
        }
        // this is head point
        if (raw_title.indexOf('|') == 0) {
            decorated = true;
            widget.addClass('head-title');
            raw_title = raw_title.substring(1);
        }

        if (decorated && raw_title) {
            raw_title = '<span>' + raw_title + '</span>';
        }

        return title.replaceAll(pre_title, raw_title);
    }
    /*widget premade*/
    if (is_home()) {
        $('#content-section-after-post').remove();
    } else {
        if (SHOW_AFTER_POST_SECTION == 'none') {
            $('#content-section-after-post').remove();
        } else {
            $('#content-section-after-post').appendTo($('.after-post-content-' + SHOW_AFTER_POST_SECTION));
        }
    }

    $('.cloud-label-widget-content .label-size').addClass('bg');
    $('.cloud-label-widget-content .label-size .label-count').each(function () {
        $(this).html($(this).html().replace('(', '').replace(')', ''));
    });

    /*widget parser*/
    /********************************************************/
    /********************************************************/
    $('.widget').css('opacity', '1');
    $('.widget > h2').each(function () {
        var wtitle = $(this).html().replaceAll('\n', '');
        var widget = $(this).parent();
        widget.type = widget.attr('class').replace('widget ', '').replace(' ', '').toLowerCase();

        wtitle = widget_title_decor(widget, wtitle);
        $(this).html(wtitle);


        // if widget title has no param, show it and return
        if (!wtitle.has('$') || !wtitle.has('=')) {
            if (!widget.is('.PopularPosts')) {
                $(this).show();
                return;
            }
        }

        // if has param, find them
        wtitle = wtitle.split('$');

        // init widget object
        widget.section_id = widget.parent().attr('id');
        widget.id = widget.attr('id');
        widget.title = wtitle[0];
        widget.param = new Object();
        // scan param
        for (var i = 1; i < wtitle.length; i++) {
            if (wtitle[i].has('=')) {
                var property = wtitle[i].split('=');
                if (property.length < 2 || (!property[0].length) || (!property[1].length)) {
                    continue;
                }
                widget.param[property[0]] = property[1];
            }
        }

        // some misc widgets
        if (is_empty(widget.param.type)) {
            if (widget.type == 'popularposts') {
                widget.param.type = 'one';
            } else {
                widget.param.type = 'misc';
            }
        }

        // update to tn_widget list for show / hide 
        if (!is_empty(widget.param) && !is_empty(widget.param.type)) {
            // SHOW param
            // specific showing page
            // home, archive, index, label, search, page, post, singular, error/404 or specific url		
            if (!is_empty(widget.param.show)) {
                var show = false;

                // if show param is URL
                if (widget.param.show.has('.') || widget.param.show.has('/')) {
                    show = tn_url.current.has(widget.param.show) ||
                        tn_url.current.has(encodeURI(widget.param.show)) ||
                        decodeURIComponent(tn_url.current).has(widget.param.show);
                }

                // combine with other cases			
                var show_param = widget.param.show.split('-');


                for (var show_index = 0; show_index < show_param.length; show_index++) {
                    switch (show_param[show_index]) {
                        case 'home': show = show || is_home(); break;
                        case 'label': show = show || is_label(); break;
                        case 'search': show = show || is_search(); break;
                        case 'archive': show = show || is_archive(); break;
                        case 'index': show = show || is_index(); break;
                        case 'page':
                        case 'static':
                        case 'static_page':
                            show = show || is_page();
                            break;
                        case 'post':
                        case 'article':
                        case 'item':
                        case 'single':
                            show = show || is_item(); break;
                        case 'singular': show = show || is_singular(); break;
                        case '404':
                        case 'error':
                        case 'error_page': show = show || is_404(); break;
                        case 'mobile':
                        case 'phone': show = show || is_mobile(); break;
                        default:
                            break;
                    }
                }
                if (!show) {
                    widget.remove();
                    return;
                }
            }

            // HIDE param
            if (!is_empty(widget.param.hide)) {
                var hide = false;
                // if hide param is URL
                if (widget.param.hide.has('.') || widget.param.hide.has('/')) {
                    hide = tn_url.current.has(widget.param.hide) ||
                        tn_url.current.has(encodeURI(widget.param.hide)) ||
                        decodeURIComponent(tn_url.current).has(widget.param.hide);
                }

                // combine with other cases
                var hide_param = widget.param.hide.split('-');

                for (var hide_index = 0; hide_index < hide_param.length; hide_index++) {
                    switch (hide_param[hide_index]) {
                        case 'home': hide = hide || is_home(); break;
                        case 'label': hide = hide || is_label(); break;
                        case 'search': hide = hide || is_search(); break;
                        case 'archive': hide = hide || is_archive(); break;
                        case 'index': hide = hide || is_index(); break;
                        case 'page':
                        case 'static':
                        case 'static_page': hide = hide || is_page(); break;
                        case 'post':
                        case 'article':
                        case 'item':
                        case 'single': hide = hide || is_item(); break;
                        case 'singular': hide = hide || is_singular(); break;
                        case '404':
                        case 'error':
                        case 'error_page': hide = hide || is_404(); break;
                        case 'mobile':
                        case 'phone': hide = hide || is_mobile(); break;
                        default:
                            break;
                    }
                }
                if (hide) {
                    widget.remove();
                    return;
                }
            }

            // valid type
            widget.param.type = widget.param.type.toLowerCase();

            // scan content depending on the widget type
            // image
            if (widget.type == 'image') {
                widget.content = new Object();
                widget.find('.widget-content').each(function () {
                    $(this).find('img').each(function () {
                        widget.content.src = $(this).attr('src');
                    });
                    $(this).find('.caption').each(function () {
                        widget.content.caption = $(this).html();
                    });
                    $(this).find('a').each(function () {
                        widget.content.href = $(this).attr('href');
                    });
                });
            }

            // linklist || pagelist
            if (widget.type == 'linklist' || widget.type == 'pagelist') {
                widget.content = new Array();
                widget.find('ul li a').each(function () {
                    var link = $(this);
                    link.name = $(this).html();
                    link.url = $(this).attr('href');
                    widget.content[widget.content.length] = link;
                });
            }

            // label
            if (widget.type == 'label') {
                widget.selectAll = false;
                widget.find('.widget-item-control').remove();
                widget.content = new Array();
                widget.find('[dir]').each(function () {
                    var text = $(this).text();

                    for (var i = 0; i < tn_blog.label.length; i++) {
                        if (text == tn_blog.label[i].name) {
                            break;
                        }
                    }
                    if (i < tn_blog.label.length) {
                        var label = new Object();
                        label.name = tn_blog.label[i].name;
                        label.slug = tn_blog.label[i].slug;
                        widget.content.push(label);
                    }
                });

                if (widget.content.length == tn_blog.label.length || widget.content.length == 0) {
                    widget.selectAll = true;
                }
            }

            // Fill Data for Popular Posts
            if (widget.type == 'popularposts') {
                widget.json = new Object();
                widget.json.entry = new Array();
                var entry_index = 1;
                widget.find('li').each(function () {
                    // make static json data
                    var entry = $(this);
                    entry.link = $(this).find('a').attr('href');
                    entry.title = '';
                    entry.cate = [entry_index];
                    entry_index++;
                    entry.thumbnail = DEFAULT_POST_THUMBNAIL;
                    entry.content = entry.summary = '';
                    entry.id = 'popularposts';
                    entry.has_thumbnail = false;

                    // get title
                    $(this).find('.item-title').each(function () {
                        entry.title = $(this).find('a').html();
                    });
                    if (is_empty(entry.title)) {
                        entry.title = $(this).find('a').html();
                    }

                    // get thumbnail
                    $(this).find('img').each(function () {
                        entry.thumbnail = $(this).attr('src');
                        entry.has_thumbnail = true;
                    });

                    // get content
                    $(this).find('.item-snippet').each(function () {
                        var sumtxt = $(this).html();
                        entry.content = entry.summary = sumtxt.substring(0, sumtxt.length - 3);
                    });

                    widget.json.entry[widget.json.entry.length] = entry;
                });
            }



            // alias property map
            var alias = {
                'cols': 'columns',
                'clm': 'columns',
                'cls': 'columns',

                'c': 'count',
                'cnt': 'count',

                'h': 'height',
                'btn': 'buttons',
                'b': 'buttons',
                'do': 'dots',
                't': 'title',

                'm': 'meta',
                'mt': 'meta',

                'a': 'author',
                'au': 'author',

                'cm': 'comment',
                'com': 'comment',
                'comments': 'comment',

                'd': 'date',
                'sp': 'speed',

                'rdm': 'readmore',
                'rm': 'readmore',

                'sn': 'snippet',
                's': 'snippet',
                'snip': 'snippet',

                'description': 'desc',
                'ds': 'desc',
                'dsc': 'desc',

                'cat': 'cate',
                'ct': 'cate',
                'label': 'cate',
                'labels': 'cate',
                'lab': 'cate',
                'la': 'cate',
                'l': 'cate',
                'category': 'cate',
                'categories': 'cate',

                'va': 'viewall',

                'idx': 'index', /*for show / hide popular index number*/
                'id': 'index',

                'pagination': 'pages',
                'navigation': 'pages',
                'page': 'pages',
                'pag': 'pages',
                'pgn': 'pages',
                'nav': 'pages',
                'nv': 'pages',
                'p': 'pages',
                'pg': 'pages',

                'ico': 'icon',
                'i': 'icon',
                'ic': 'icon',

                'cl': 'color',
                'col': 'color',
                'clr': 'color',
                'co': 'color',

                'tb': 'tbg',
                'thumb_bg': 'tbg',

                'src': 'source',
                'sr': 'source',

                'spc': 'space',
                'spa': 'space',
                'spacing': 'spac',

                'hst': 'host',
                'ho': 'host',

                'tp': 'topic',
                'to': 'topic',
                'top': 'topic',
                'tpc': 'topic'
            };
            for (var key in alias) {
                if (is_set(widget.param[key])) {
                    widget.param[alias[key]] = widget.param[key];
                }
            }

            if (is_set(widget.param.count) && is_number(widget.param.count)) {
                widget.param.count = Number(widget.param.count);
            }


            // pre process widget param type and sub type
            widget.param.subtype = '';
            if (widget.param.type.has('tab')) {
                widget.param.type = widget.param.type.replaceAll('tab', '').replaceAll('-', '');
                if (widget.param.type == '') {
                    widget.param.type = 'misc';
                }
                widget.param.subtype = 'tab';
            }

            // save widget
            tn_widget.push(widget);
            $(this).html(widget.title).show();

            widget.hide().addClass(widget.param.type).addClass(widget.type);
            if (widget.param.subtype) {
                widget.addClass(widget.param.subtype);
            }
        } else {
            $(this).html(widget.title).show();
        }

    });

    /*widget applications*/
    /********************************************************/
    /********************************************************/
    var TAB_LISTS = new Array();
    for (var i = 0; i < tn_widget.length; i++) {
        var widget = tn_widget[i];
        var param = widget.param;

        if (is_set(param.space) && (param.space == '0' || param.space == 'no' || param.space == 'none')) {
            widget.addClass('no-spacing');
        }

        // tab widgets
        if (param.subtype == 'tab') {
            var tab_list = new Array();
            var section_id = widget.section_id; // stop if tab widgets are in different sections

            // scan all tab widgets in chain		
            for (var j = i; j < tn_widget.length; j++) {
                if (tn_widget[j].param.subtype != 'tab' || widget.section_id != section_id) {
                    // this widget is not a tab or in a tab of other section
                    break;
                }
                // replace tab sub type to skip in next scans
                tn_widget[j].param.subtype = '';

                // add into tab list to display
                tab_list.push(tn_widget[j]);
            }

            // display tab list after scanned all
            // tab_list_show(tab_list);
            TAB_LISTS.push(tab_list);
        }

        // social link widget
        if (param.type == 'social_icons' && widget.type == 'linklist') {
            for (let j = 0; j < widget.content.length; j++) {
                let link = widget.content[j];
                let name = link.name;
                let title = link.url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0].split('.')
                title = (title[title.length - 2] || title[0])


                // add icon in case users did not input icon code with tags but only the code
                if (!name.has('<') && !name.has('>')) {
                    link.html('<i class="gib gi-' + link.name + '"></i>');
                }

                link.addClass(title).attr('title', title.toCapitalize())


                if (is_enable(widget.param.target)) {
                    link.attr('target', '_blank');
                }
                link.attr('rel', 'noopener noreferrer');
            }
            social_icons_show(widget);
            continue;
        }

        // social counter widget
        if (param.type == 'social_counter' && widget.type == 'linklist') {
            var ret = '';
            for (var j = 0; j < widget.content.length; j++) {
                var link = widget.content[j];
                var text = link.name;
                var href = link.url;
                let title = link.url.replace('http://', '').replace('https://', '').replace('www.', '').split('/')[0].split('.')
                title = (title[title.length - 2] || title[0])

                if (!text.has('|')) {
                    continue;
                }
                text = text.split('|');
                var code = text[0];
                var count = text[1];
                var count_text = trans('Followers');
                var button_text = trans('Follow');
                if (typeof (text[2]) != 'undefined') {
                    count_text = text[2];
                }
                if (typeof (text[3]) != 'undefined') {
                    button_text = text[3];
                }

                icon = apply_googleicon_tag(code, code.indexOf('rss') !== -1 ? 'gir' : 'gib');

                // strip tag                
                if (code.indexOf('<') != -1 && code.indexOf('>')) {
                    let tempEl = document.createElement('div');
                    tempEl.innerHTML = code;
                    code = tempEl.firstChild.classNames;
                }
                if (code.indexOf(' ') != -1) {
                    code = code.split(' ')[1];
                }
                if (code.indexOf('-') != -1) {
                    code = code.split('-')[1];
                }

                code = code.trim().toLowerCase();
                var name = code;

                ret += '<a title="' + title.toCapitalize() + '" class="social-counter item-' + j + ' ' + name + ' ' + name + '-color" href="' + href + '" target="_blank" rel="noopener noreferrer">\
                    <span class="icon">'+ icon + '</span>\
                    <span class="count">'+ count + '</span>\
                    <span class="text">'+ count_text + '</span>\
                    <span class="button"><span class="'+ name + '-bg bg rad2">' + button_text + ' <span class="go"><i class="gis gi-angle-right"></i></span></span></span>\
                <span class="clear"></span></a>'+ DIVCLEAR;
            }
            widget.find('.widget-content').html(ret);
            widget.show();
            continue;
        }

        // image slider
        if (param.type == 'image_list' && widget.type == 'image') {
            // stop if images are in different sections
            var section_id = widget.section_id;

            // scan all images in chain
            var image_list = new Array();
            for (var j = i; j < tn_widget.length; j++) {
                var widget = tn_widget[j];
                var param = widget.param;
                if (param.type != 'image_list' || widget.type != 'image' || widget.section_id != section_id) {
                    break;
                }
                image_list[image_list.length] = widget;
            }
            // skip all scanned image widgets for image slider
            i = j - 1;

            // call image slider handler
            image_list_show(image_list);
            continue;
        }

        // misc widget
        if (widget.param.type == 'misc' || widget.type == 'html') {
            if (widget.is('.HTML') && widget.find('#mc_embed_signup').length && !widget.find('link').length) {
                widget.type = 'followbyemail';
            }
            misc_show(widget);
            continue;
        }

        if (widget.type == 'popularposts') {
            widget.addClass('feed').show();
            widget
                .find('.widget-content')
                .addClass('feed-widget-content widget-content-' + widget.id)
                .attr('id', 'widget-content-' + widget.id);

            feed_content_show(widget);
            continue;
        }

        // label_feed
        if (widget.type == 'label' && widget.param.type != 'misc') {
            widget.attr('data-i', i);
            widget.addClass('feed pending');
            feed_show(widget);
            continue;
        }
    }
    // make tab widgets
    for (var i = 0; i < TAB_LISTS.length; i++) {
        tab_list_show(TAB_LISTS[i]);
    }

    /* MENU MAKER */
    // mobile menu
    $('<div class="mobile-menu mobile">' + $('#PageList1').html() + '</div>').insertAfter($('#PageList1'));


    // social icon for mobile
    if (!$('.top-bar').length) {
        $('#Header1 .header-social-icons').each(function () {

            $('.mobile-menu .menu').prepend('<li class="menu-item-type-custom menu-item mobile-social-icons"></li>');
            $(this).clone().prependTo($('.mobile-social-icons'));
            $(this).addClass('none-mobile');
        });
    }

    $('.mobile-menu .menu-item').each(function () {
        var icon = apply_googleicon_tag($(this).attr('data-icon'));
        if (icon) {
            $(this).find('> a').each(function () {
                $(this).html(icon + ' ' + $(this).html());
            });
        }

        // add expand / collapse button
        if ($(this).is('.menu-item-has-children')) {
            $(this).append(
                '<span class="expand toggle"><i class="gis gi-angle-down"></i></span>' +
                '<span class="collapse toggle"><i class="gis gi-angle-up"></i></span>'
            );
        }
    });



    // action for expand and collapse menu
    $('.mobile-menu .menu-item-has-children > a').click(function (e) {
        var href = $(this).attr('href');
        if (typeof (href) != 'undefined' && href.length > 2) {
            return true;
        }

        e.preventDefault();

        var par = $(this).parent();

        if (par.is('.expanded')) {
            par
                .addClass('collapsed')
                .removeClass('expanded')
                .find('> .sub-menu').slideUp();
        } else {
            par
                .removeClass('collapsed')
                .addClass('expanded')
                .find('> .sub-menu').slideDown();
        }

        return false;

    });
    $('.mobile-menu .menu-item .expand').click(function () {
        var par = $(this).parent();
        par
            .removeClass('collapsed')
            .addClass('expanded')
            .find('> .sub-menu').slideDown();
    });
    $('.mobile-menu .menu-item .collapse').click(function () {
        var par = $(this).parent();
        par
            .addClass('collapsed')
            .removeClass('expanded')
            .find('> .sub-menu').slideUp();
    });

    // main menu
    $('#PageList1 > ul').attr('id', 'menu-header-section');
    $('#PageList1 li').each(function () {
        var icon = apply_googleicon_tag($(this).attr('data-icon'));
        if (icon) {
            $(this).find('> a').each(function () {
                $(this).html(icon + ' ' + $(this).html());
            });
        }

        if ($(this).find('> ul').length) {
            $(this).find('> ul').wrap('<div class="menu-item-inner"></div>');
            $(this).find('> a').each(function () {
                $(this).html($(this).html() + ' <span class="arrow"></span>');
            });
        } else {
            $(this).append('<div class="menu-item-inner"></div>');
        }
    });
    $('#PageList1 div.menu-item-inner').append(DIVCLEAR);
    $('#PageList1 > ul > li').each(function () {
        var enable_mega = $(this).attr('data-enable_mega');
        if (is_set(enable_mega) && enable_mega == 'true') {
            $(this).addClass('menu-item-mega');
            if ($(this).is('.menu-item-type-label')) {
                var href = $(this).find('> a').attr('href');
                $(this).attr('data-slug', get_label_slug(href));
                $(this).addClass('menu-item-mega-label');
                $(this).find('> .menu-item-inner').prepend('<div class="menu-mega-content"><div class="loader">Loading...</div></div>');
            } else {
                $(this).addClass('menu-item-mega-link');
            }
        }
    });


    $('#PageList1 li a').each(function () {
        var href = $(this).attr('href');
        if (is_set(href) && tn_url.current == href) {
            $(this).addClass('current');
            $(this).parent().addClass('menu-item-current');
        }
    });
    $('#PageList1').addClass('menu pagelist main-menu no-title').show().append(DIVCLEAR);

    /*COMMENT MASTER*/
    /*
    http://1576025477689969055.blogspot.com/feeds/postID/comments/default
    var COMMENT_ITEMS = [{
        'id' : '657137272741218347',
        'body' : '[video]http://www.youtube.com/watch?v\75vHGwF8poOyw[/video]',
        'timestamp' : '1390883785262',
        'permalink' : 'http://1576025477689969055.blogspot.com/2014/01/new-post-without-image.html?showComment\0751390883785262#c657137272741218347',
        'author' : {
            'name' : 'Tien Nguyen',
            'avatarUrl' : '//lh4.googleusercontent.com/-JTKLZF7yj9U/AAAAAAAAAAI/AAAAAAAACQw/2ku1eqCU9pA/s35-c/photo.jpg',
            'profileUrl' : 'https://www.blogger.com/profile/15469822106911365261'
        },
        'displayTime' : 'January 27, 2014 at 8:36 PM',
        'deleteclass' : 'item-control blog-admin pid-1360947394'
    }, {
        'id' : '2489830715278407706',
        'parentId' : '657137272741218347',
        'body' : 'I love this theme, thank god',
        'timestamp' : '1390884006139',
        'permalink' : 'http://1576025477689969055.blogspot.com/2014/01/new-post-without-image.html?showComment\0751390884006139#c2489830715278407706',
        'author' : {
            'name' : 'Tien Nguyen',
            'avatarUrl' : '//lh4.googleusercontent.com/-JTKLZF7yj9U/AAAAAAAAAAI/AAAAAAAACQw/2ku1eqCU9pA/s35-c/photo.jpg',
            'profileUrl' : 'https://www.blogger.com/profile/15469822106911365261'
        },
        'displayTime' : 'January 27, 2014 at 8:40 PM',
        'deleteclass' : 'item-control blog-admin pid-1360947394'
    }
    */

    function modify_comment_body(html) {
        // backup all html tags into a list and then replace after modify content
        var tag_list = new Array();
        var media_list = new Array();
        var tag_holder = ' _____THIS_IS_TAG_HOLDER_____' + randNumStr() + '_____ ';
        var media_holder = ' _____THIS_IS_MEDIA_HOLDER_____' + randNumStr() + '_____ ';
        var index = 0;
        var start = -1;
        var end = -1;
        for (var i = 0; i < 1000; i++) {
            index = html.indexOf('<', index);
            if (index == -1) { break; }
            start = index;

            index = html.indexOf('>', index);
            if (index == -1) { break; }
            end = index;

            tag_list.push(html.substring(start, end + 1));
            html = html.substring(0, start) + tag_holder + html.substring(end + 1);
            index = start + tag_holder.length;
        }

        // media attach
        if (COMMENT_MEDIA_ATTACH) {
            var urls = get_urls(html);
            if (urls != null) {
                for (var i = 0; i < urls.length; i++) {
                    var url = urls[i];
                    html = html.replace(url, media_holder);

                    // replace for youtube
                    if (url.has('youtube') || url.has('youtu.be')) {
                        // replace as youtube iframe
                        var vid = get_youtube_video_id(url);
                        var lid = get_youtube_list_id(url);
                        if (vid) {
                            var rep_code = '<iframe class="comment-media video youtube" width="640" height="360" src="https://www.youtube.com/embed/' + vid + '?';
                            if (lid) {
                                rep_code += 'list=' + lid;
                            } else {
                                rep_code += 'rel=0';
                            }
                            rep_code += '" frameborder="0" allowfullscreen></iframe>';
                            media_list.push(rep_code);
                            continue;
                        }
                    }

                    // replace for vimeo
                    if (url.has('vimeo')) {
                        var vid = get_vimeo_video_id(url);
                        if (vid) {
                            media_list.push('<iframe class="comment-media video vimeo" src="https://player.vimeo.com/video/' + vid + '" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                            continue;
                        }
                    }

                    // replace for images
                    if (is_image_src(url)) {
                        media_list.push('<img class="comment-media image" src="' + url + '" alt="comment-image"/>');
                        continue;
                    }

                    // other link will become external
                    media_list.push('<a href="' + url + '" target="_blank" rel="nofollow">' + url + '</a>');
                }
            }
        }


        if (COMMENT_EMOTICONS) {
            // insert emoticons, always stay at bottom		
            $.each(EMOTICONS, function (key, value) {
                html = html.replaceAll(key, '<img src="data:image/png;base64,' + value + '"/>');
            });
        }

        // restore html tags from list
        for (var i = 0; i < tag_list.length; i++) {
            html = html.replace(tag_holder, tag_list[i]);
        }

        // restore media tags from list
        for (var i = 0; i < media_list.length; i++) {
            html = html.replace(media_holder, media_list[i]);
        }

        return html;
    }

    function show_blogger_comment() {

        // show comments
        var comment_holder = $('.blogger-comments-holder');
        comment_holder.html('<ul class="main-comments"></ul>');
        var allowNewComments = ($('.noNewComments').length == 0);

        if (typeof (SNEEIT_LICENSE) == 'undefined') {
            return false;
        }

        // scan list
        for (var i = 0; i < COMMENT_ITEMS.length; i++) {
            var comment = COMMENT_ITEMS[i];
            // modify comment body
            if (COMMENT_EMOTICONS || COMMENT_MEDIA_ATTACH) {
                comment.body = modify_comment_body(comment.body);
            }

            // count comment level
            var level = 0;
            if (!is_empty(comment.parentId)) {
                if (comment_holder.find('li.comment-' + comment.parentId).length != 0) {
                    level = Number(comment_holder.find('li.comment-' + comment.parentId).attr('data-level')) + 1;
                }
            }

            // make content
            var comment_content = '<li id="c' + comment.id + '" class="comment comment-' + i + ' comment-' + comment.id + '" data-level="' + level + '">';
            var temp = '';
            if (is_empty(comment.author.avatarUrl) || comment.author.avatarUrl.has('img1.blogblog.com/img/blank.gif')) {
                comment.author.avatarUrl = DEFAULT_COMMENT_AVATAR;
            }
            comment.author.avatarUrl = b_resize_image(comment.author.avatarUrl, 48);
            temp = '<img alt="commenter-avatar" class="shad cir" src="' + comment.author.avatarUrl + '"/>';
            if (is_empty(comment.author.profileUrl)) {
                comment_content += '<span class="comment-avatar">' + temp + '</span>';
            } else {
                comment_content += '<a class="comment-avatar" href="' + comment.author.profileUrl + '" target="_blank" rel="nofollow">' + temp + '</a>';
            }

            comment_content += '<div class="comment-content">'
                + '<div class="comment-header">';
            temp = comment.author.name;
            if (is_empty(comment.author.profileUrl)) {
                comment_content += '<span class="comment-name">' + temp + '</span>';
            } else {
                comment_content += '<a class="comment-name" href="' + comment.author.profileUrl + '" target="_blank" rel="nofollow">' + temp + '</a>';
            }
            comment_content += ' <a class="comment-date" href="' + comment.permalink + '" data-timestamp="' + comment.timestamp + '">' + comment.displayTime + '</a>'
                + '</div>' /*comment-header*/
                + '<div class="comment-body">' + comment.body + '</div>'
                + '<div class="comment-footer">'
                + (level <= MAX_REPLY_DEPTH && allowNewComments ? '<a href="javascript:void(0)" class="comment-reply-add" data-parentid="' + comment.id + '"><span>' + trans('Reply') + '</span> <i class="gis gi-mail-forward"></i></a>' : '')
                + '<span class="' + comment.deleteclass + '"><a target="_self" href="https://www.blogger.com/delete-comment.g?blogID=' + tn_blog.blogId + '&postID=' + comment.id + '"><span>' + trans('Delete') + '</span> <i class="gis gi-trash-o"></i></a></span>'
                + '</div>'/*comment-footer*/
                + '</div>'
                + DIVCLEAR
                + '<div class="comment-form-holder comment-form-holder-' + comment.id + '"></div>'
                + '</li>';/*end comment content and item*/

            // adjust content		
            if (level) {
                // create list to adjust to if has not exist
                if (comment_holder.find('ul.sub-comments-of-' + comment.parentId).length == 0) {
                    if (comment_holder.find('li.comment-' + comment.parentId).length != 0) {
                        comment_holder.find('li.comment-' + comment.parentId).append('<ul class="sub-comments sub-comments-of-' + comment.parentId + '"></ul>');
                    } else {
                        comment_holder.find('ul.main-comments').append(comment_content);
                    }
                }
                // adjust
                comment_holder.find('ul.sub-comments-of-' + comment.parentId).append(comment_content);
            } else {
                // if level 0
                comment_holder.find('ul.main-comments').append(comment_content);
            }
        }

        // reply comment effects
        $(document).on('click', '.comment-reply-add', function () {
            var parentid = $(this).attr('data-parentid');
            $('#comment-editor').attr('src', $('.comment-editor-src').attr('data-src') + '&parentID=' + parentid);
            $('.comment-form-wrapper').appendTo($('.comment-form-holder-' + parentid));
            $(document).find('.comment-reply-cancel').each(function () {
                $(this).addClass('comment-reply-add').removeClass('comment-reply-cancel').html('<span>' + trans('Reply') + '</span> <i class="gis gi-mail-forward"></i>');
            });
            $(this).addClass('comment-reply-cancel').removeClass('comment-reply-add').html('<span>' + trans('Cancel reply') + '</span> <i class="gis gi-close"></i>');
        });
        $(document).on('click', '.comment-reply-cancel', function () {
            var comment_editor_src =
                $('#comment-editor').attr('src', $('.comment-editor-src').attr('data-src'));
            $('.comment-form-wrapper').appendTo($('.comment-form-add-new'));
            $(this).addClass('comment-reply-add').removeClass('comment-reply-cancel').html('<span>' + trans('Reply') + '</span> <i class="gis gi-mail-forward"></i>');
        });

        // pretty comment date-time
        comment_holder.find('.comment-date').each(function () {
            $(this).html($.format.prettyDate(new Date(Number($(this).attr('data-timestamp')))));
        });
        if (tn_url.current.has('showComment=') && tn_url.current.has('#c')) {
            setTimeout(function () {
                scroll_to(tn_url.hash);
            }, 1000);
        }
        // console.log(COMMENT_ITEMS);


    }
    var comment_feed_url = new Array();
    var comment_feed_url_id = 0;
    function adjust_comment_item_list() {
        $.get(comment_feed_url[comment_feed_url_id], function (json) {
            json = b_valid_json(json);

            if (typeof (json) == 'undefined' || typeof (SNEEIT_LICENSE) == 'undefined') {
                return false;
            }

            if (!json) {
                show_blogger_comment();
                return;
            }
            json = new b_parse_json(json);

            if (json.entry.length == 0) {
                show_blogger_comment();
                return;
            }

            for (var i = json.entry.length - 1; i >= 0; i -= 1) {
                var comment = new Object();
                e = json.entry[i];
                comment.id = e.id;
                if (e.parentId) {
                    comment.parentId = e.parentId;
                }
                comment.body = e.content;
                var d = new Date(e.published);
                comment.timestamp = d.getTime().toString();
                comment.permalink = e.link;
                comment.author = new Object();
                comment.author.name = e.author.name;
                comment.author.avatarUrl = e.author.avatar;
                comment.author.profileUrl = e.author.uri;
                comment.displayTime = e.displayTime;
                comment.deleteclass = 'item-control blog-admin ' + e.itemClass;
                COMMENT_ITEMS.push(comment);
            }
            comment_feed_url_id++;
            if (comment_feed_url_id >= comment_feed_url.length) {
                show_blogger_comment();
                return;
            } else {
                adjust_comment_item_list();
            }

        }, "jsonp").fail(function () {
            $('.blogger-comments-default-pagination').show();
            show_blogger_comment();
        });
    }

    // show comment count for primary comment system
    $('.' + PRIMARY_COMMENT_SYSTEM + '-comment-counter').show();
    if (PRIMARY_COMMENT_SYSTEM == 'disqus') {
        /* * * DON'T EDIT BELOW THIS LINE * * */
        var s = document.createElement('script');
        s.async = true;
        s.type = 'text/javascript';
        s.src = 'https://' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }
    var SHOWING_COMMENT_SYSTEM = PRIMARY_COMMENT_SYSTEM;
    // show right tab to allow jump to comment by hash
    if (tn_url.hash.has('#comment-')) {
        SHOWING_COMMENT_SYSTEM = 'disqus';
    } else if (is_set(tn_query['fb_comment_id'])) {
        SHOWING_COMMENT_SYSTEM = 'facebook';
    }

    // Apply comment layout
    if ($('.blogger-comments-holder').length) {
        if (!is_empty(COMMENT_ITEMS)) {
            if (tn_blog.bloggerCommentNumber <= 200) {
                // if single page, just show
                show_blogger_comment();
            } else {
                // more than 200, adjust comment item list then show		
                for (var i = 0; i < tn_blog.bloggerCommentNumber - 200; i += 200) {
                    var max_result = 200;
                    if (i + max_result > tn_blog.bloggerCommentNumber - 200) {
                        max_result = tn_blog.bloggerCommentNumber - i - 200;
                    }
                    comment_feed_url.push(tn_url.feed + '/' + tn_blog.postId + '/comments/default?alt=json-in-script&max-results=' + max_result + '&start-index=' + (i + 1));
                }
                // console.log(comment_feed_url);
                adjust_comment_item_list();
            }
        }

        // incase Blogger not return COMMENT ITEMS, we just need to show 
        // their default comment systems
        else {
            // custom for hard code (official) thread comment here
            // when Jso return null
            $('.blogger-comments-holder .comments').show();

            // mapping css class and id
            $('.blogger-alt-comments .avatar-image-container img').each(function () {
                $(this).addClass('shad cir');
                var src = $(this).attr('src');
                if (is_empty(src)) {
                    return;
                }
                if (src.has('blank.gif')) {
                    $(this).attr('src', DEFAULT_COMMENT_AVATAR);
                }
            });

            // add comment reply button for child replies
            $('.blogger-alt-comments .comment-reply').each(function () {
                $(this).append(' <i class="gis gi-mail-forward color"></i>');
                var child_comment_actions = $(this).parents('.comment').find('.comment .comment-actions');
                var parent_comment_reply = $(this);
                if (child_comment_actions.length) {
                    child_comment_actions.each(function () {
                        // this already has comment reply
                        if ($(this).find('.comment-reply').length) {
                            return;
                        }

                        // clone reply link of the parent
                        parent_comment_reply.clone().prependTo($(this));
                        var id = $(this).parents('.comment');
                        if (id.length) {
                            id = id.attr('id');
                            id = id.replace('c', '');
                        }
                        if (is_number(id)) {
                            $(this).find('.comment-reply').attr('data-comment-id', id);
                        }
                    });
                }
            });

            // move reply box to near the level 1 comment
            $('.blogger-alt-comments ol#top-ra > li.comment').each(function () {
                var reply_box = $(this).find('> .comment-replybox-single');
                var replies = $(this).find('> .comment-replies');
                reply_box.insertBefore(replies);
            });


            // modify position of message
            $('#comment-holder .comment-replybox-thread').each(function () {
                $('.comment-form-message').prependTo($(this));
            });
            // replace bad avatar from Blogger
            $('.avatar-image-container img').each(function () {
                var src = $(this).attr('src');
                if (src.indexOf('zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ') != -1) {
                    $(this).attr('src', DEFAULT_COMMENT_AVATAR);
                }
            });

            // add cancel reply
            $('#top-continue > a')
                .addClass('comment-cancel-link')
                .html('<span>' + trans('Cancel reply') + '</span> <i class="gis gi-close color"></i>');

            // - when click a REPLY link
            $('.blogger-alt-comments .comment-actions .comment-reply').addClass('comment-reply-link').click(function () {
                var cancel_link = $('#top-continue');
                if (!cancel_link.length) {
                    return;
                }
                $('.blogger-alt-comments .comment-reply-link').show();
                $(this).hide();
                cancel_link.prependTo($(this).parent());
                cancel_link.show();
                $('.comment-form-message').prependTo($(this).parents('.comment').first().find('> .comment-replybox-single'));


                // check if can't show comment editor for child reply
                var current_comment_reply = $(this);
                setTimeout(function () {
                    var comment_editor = current_comment_reply.parents('.comment').find(' > .comment-replybox-single > iframe');
                    if (comment_editor.length) {
                        return;
                    }

                    comment_editor = $('#comment-editor');
                    if (!comment_editor.length) {
                        location.reload();
                        return;
                    }

                    var comment_editor_src = comment_editor.attr('src');
                    if (is_empty(comment_editor_src)) {
                        location.reload();
                        return;
                    }

                    var start_ = 'parentID=';
                    var end_ = '#';
                    var current_comment_id = current_comment_reply.attr('data-comment-id');
                    comment_editor_src_start = comment_editor_src.indexOf(start_);
                    comment_editor_src_end = comment_editor_src.indexOf(end_);
                    if (-1 == comment_editor_src_start) {
                        comment_editor_src_start = comment_editor_src.indexOf('?');
                        if (-1 == comment_editor_src_start) {
                            location.reload();
                            return;
                        }
                        comment_editor_src =
                            comment_editor_src.substring(0, comment_editor_src_start + 1) +

                            'parentID=' + current_comment_id + '&' +
                            comment_editor_src.substring(comment_editor_src_start + 1);
                    } else if (-1 != comment_editor_src_end) {
                        comment_editor_src =
                            comment_editor_src.substring(0, comment_editor_src_start + start_.length) +
                            current_comment_id +
                            comment_editor_src.substring(comment_editor_src_end);
                    } else {
                        location.reload();
                        return;
                    }

                    // append comment form to current reply box
                    comment_editor.attr('src', comment_editor_src);
                    comment_editor.appendTo($('#c' + current_comment_id).find('> .comment-replybox-single'));
                }, 1000);


            });
            // - when click a CANCEL link
            $(document).find('.comment-cancel-link').click(function () {
                $(document).find('#top-continue').hide();
                $('.blogger-alt-comments .comment-reply-link').show();
                $('.comment-form-message').prependTo($('.comment-replybox-thread'));
            });



            // add shortcode for comment content
            $('.blogger-alt-comments .comment-content').each(function () {
                var content = modify_comment_body($(this).html());
                $(this).html(content);
            });




        }
    }


    $('#comments').each(function () {
        if ($('.comments').length == 0) {
            $(this).remove();
            return;
        }
        // show primary comment system, also allow switch tabs
        if ($('.' + PRIMARY_COMMENT_SYSTEM + '-comments').length == 0) {
            $('.comments').first().addClass('active');
        } else {
            $('.' + PRIMARY_COMMENT_SYSTEM + '-comments').addClass('active');
        }

        // create comment tabs
        $('.comments.active .comments-title').addClass('active').appendTo($('#comments-title-tabs'));
        $('.comments .comments-title').appendTo($('#comments-title-tabs'));
        $('#comments-title-tabs .comments-title').addClass('comments-title-tab');
        if (SHOWING_COMMENT_SYSTEM != PRIMARY_COMMENT_SYSTEM) {
            $('#comments-title-tabs a.active').removeClass('active');
            $('.comments.active').removeClass('active');
            $('#comments-title-tabs a.' + SHOWING_COMMENT_SYSTEM + '-comments-title').addClass('active');
            $('.' + SHOWING_COMMENT_SYSTEM + '-comments').addClass('active');
        }

        // switch tabs
        $('#comments-title-tabs a').click(function () {
            if ($(this).is('.active')) {
                return
            }
            $('#comments-title-tabs a.active, .comments.active').removeClass('active');
            $(this).addClass('active');
            $($(this).attr('data-target')).addClass('active');
        });
    });

    /*POST CONTENT MASTER*/
    /* feature image master */
    if ($('.post-body-inner img').length) {
        if (FEATURE_IMAGES == 'always-before' ||
            FEATURE_IMAGES == 'always-after' ||
            FEATURE_IMAGES == 'selected-before' ||
            FEATURE_IMAGES == 'selected-after') {
            var first_img = null;
            var selected_img = null;
            var final_image = null;
            // scan to find feature (selected) image
            $('.post-body-inner img').each(function () {
                if (first_img && selected_img) {
                    return;
                }
                var src = $(this).attr('src');
                var title = $(this).attr('title');
                if (is_empty(first_img) && !is_empty(src)) {
                    first_img = $(this);
                }
                if (is_empty(selected_img) && !is_empty(title) && title.toLowerCase().has('[feature]') && !is_empty(src)) {
                    selected_img = $(this);
                }
            });

            // priority show selected image than first image
            if (selected_img) {
                first_img = selected_img;
            }

            // then show the image (also relative parents) if found something	
            if (selected_img && (FEATURE_IMAGES == 'selected-before' ||
                FEATURE_IMAGES == 'selected-after')) {
                final_image = selected_img;

                src = selected_img;
                // remove useless wrapper and parrent

            } else if (first_img && (FEATURE_IMAGES == 'always-before' ||
                FEATURE_IMAGES == 'always-after')) {
                final_image = first_img;
            }

            // and showing the found image and its caption (if it has)
            var html = '';
            if (final_image) {
                final_image.each(function () {
                    if (html) {
                        return;
                    }
                    // collect data
                    var src = $(this).attr('src');
                    if (FEATURE_IMAGES_RESIZE) {
                        src = b_resize_image(src, $('#content').width());
                    }
                    var alt = $('h1.post-title').text();
                    var html = '<img src="' + src + '"/>';


                    $(this).parents('table.tr-caption-container').each(function () {
                        $(this).find('.tr-caption').each(function () {
                            html += '<div class="post-feature-image-caption">' + $(this).html() + '</div>';
                        });
                    });

                    html = '<div class="post-feature-image-wrapper">' + html + '</div>';

                    // remove useless wrapper and parrent
                    $(this).hide();
                    $(this).parents('a').hide();
                    $(this).parents('table.tr-caption-container').hide();
                    $(this).parents('div.separator[style!=""]').hide();

                    // show feature image
                    if (FEATURE_IMAGES.indexOf('-before') != -1) {
                        $('.post .post-header').prepend(html);
                    } else {
                        $('.post .post-header').append(html);
                    }
                    $('.post-feature-image-wrapper img')
                        .attr('title', alt)
                        .attr('alt', alt)
                        .addClass('loading')
                        .on('load error', (function () {
                            $(this).removeClass('loading');
                        }))
                        ;
                });
            }
        }
    }


    // remove margin from a tag wrapping on image
    $('.post-body img').each(function () {
        // remove margin
        var image_parent = $(this).parent();
        if (image_parent.length) {
            image_parent_style = image_parent.attr('style');
            if (image_parent_style &&
                image_parent.is('a') &&
                image_parent.attr('style').indexOf('margin-left') != -1 &&
                image_parent.attr('style').indexOf('margin-right') != -1 &&
                image_parent.css('margin-left') == image_parent.css('margin-right') &&
                image_parent.css('float') == 'none') {
                image_parent.css('margin-left', '').css('margin-right', '');
            }
        }

    });


    /*breadcrumb master*/
    $('.post-breadcrumb').html(function () {
        var ret = '';
        var breadcrumb_depth = 0;

        for (var i = 0; i < tn_blog.label.length && breadcrumb_depth < MAX_BREADCRUMB_DEPTH; i++) {
            if ($.inArray(tn_blog.label[i].url, tn_blog.postLabel) != -1) {
                breadcrumb_depth++;
                if (ret) {
                    ret += '<span><i class="gis gi-angle-right"></i></span>';
                }
                ret += '<a href="' + set_label_url(tn_blog.label[i].slug) + '">' + tn_blog.label[i].name + '</a>';
            }
        }
        if (ret) {
            ret = '<a href="/">' + trans('Home') + '</a><span><i class="gis gi-angle-right"></i></span>' + ret;
        }
        return ret;
    });

    /*title and subtitle master*/
    $('.post-title').html(function () {
        var ret = $(this).html();

        $('.post-body h2').each(function () {
            if ($(this).find('strike').length) {
                ret = '<span class="custom-post-title">' + $(this).html() + '</span>';
                $(this).remove();
                return ret;
            }
        });

        return ret;
    })
    $('.post-sub-title-wrapper').html(function () {
        var ret = '';

        $('.post-body h3').each(function () {
            if ($(this).find('strike').length) {
                ret = '<h2 class="post-sub-title">' + $(this).html() + '</h2>';
                $(this).remove();
                return ret;
            }
        });

        return ret;
    });

    /*break links*/
    // search label for list, the smallest label
    if ($('.post-break-links').length) {
        // we find the smallest label that has number of post larger or equal which what we need
        for (var i = tn_blog.label.length - 1; i >= 0; i--) {
            if ($.inArray(tn_blog.label[i].url, tn_blog.postLabel) != -1 &&
                tn_blog.label[i].count >= NUM_BREAK_LINKS) {
                break;
            }
        }

        // not found? just select the smallest
        if (i < 0) {
            i = 0;
        }

        // start index of blogger json always larger or equal 1.
        // will will rand from 1 and to total with padding = number post we want + 1
        // why + 1? because may in the posts we got, they have current inside.
        var total_post = tn_blog.label[i].count;
        var start_index = randInt(1, total_post - NUM_BREAK_LINKS - 1);

        if (start_index < 1) {
            start_index = 1;
        }

        $.get(tn_url.feed + '/posts/default/-/' + tn_blog.label[i].slug + '?max-results=' + (NUM_BREAK_LINKS + 1) + '&start-index=' + start_index + '&alt=json-in-script', function (json) {

            json = b_valid_json(json);
            if (!json) {
                return;
            }
            json = new b_parse_json(json);

            if (json.entry.length == 0) {
                return;
            }

            var start = -1;
            if (json.entry.length <= NUM_BREAK_LINKS) {
                start = 0;
            }
            for (var i = 0; i < json.entry.length; i++) {
                if (json.entry[i].id == tn_blog.postId) {
                    start = 0;
                    break;
                }
            }

            if (start == -1) {
                start = randInt(0, 1);
            }
            var ret = '';
            var counter = 0;
            for (var i = start; i < json.entry.length && counter < NUM_BREAK_LINKS; i++) {
                var e = json.entry[i];
                if (e.id == tn_blog.postId) {
                    continue;
                }
                ret += '<div class="post-break-link"><i class="gis gi-angle-right"></i> <a href="' + e.link + '">' + e.title + '</a></div>'
                counter++;
            }

            $('.post-break-links').html(ret);
        }, "jsonp");
    }

    /* table of content */
    var table_of_content_html = '';
    if (TABLE_OF_CONTENT && 'none' != TABLE_OF_CONTENT) {
        // scan the top heading tag
        var heading_tag_top = 2;
        for (; heading_tag_top < 6 && $('.post-body-inner h' + heading_tag_top).length == 0; heading_tag_top++) { }

        if (heading_tag_top < 6) {
            /* scan all headings and set IDs */
            var h_main_t = 'h' + heading_tag_top;
            var h_sub_t = 'h' + (heading_tag_top + 1);
            var h_subsub_t = 'h' + (heading_tag_top + 2);
            var h_main = 0;
            var h_sub = 0;

            $('.post-body-inner ' + h_main_t +
                ', .post-body-inner ' + h_sub_t +
                ', .post-body-inner ' + h_subsub_t).each(function () {

                    var cur_id = $(this).attr('id');

                    // find current id
                    if (typeof (cur_id) == 'undefined' || !cur_id) {
                        cur_id = txt_2_slug($(this).text());
                        if ($(this).is(h_sub_t)) {
                            cur_id = h_sub_t + '-' + cur_id;
                        }
                        if ($(this).is(h_subsub_t)) {
                            cur_id = h_subsub_t + '-' + cur_id;
                        }

                        $(this).addClass('nake-id');
                    }
                    $(this).attr('id', cur_id);

                    // add data and class						
                    if ($(this).is(h_main_t)) {
                        h_main++;
                        $(this).attr('data-' + h_main_t, h_main);
                    } else if ($(this).is(h_sub_t)) {
                        h_sub++;
                        $(this).attr('data-' + h_sub_t, h_sub);
                        $(this).addClass(h_sub_t + '-' + h_main);
                    } else {
                        $(this).addClass(h_subsub_t + '-' + h_sub);
                    }
                });



            /* create navigation HTML */

            $('.post-body-inner ' + h_main_t).each(function () {
                table_of_content_html += '<li><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a>';
                var h_main = $(this).attr('data-' + h_main_t);
                if ($('.' + h_sub_t + '-' + h_main).length) {
                    table_of_content_html += '<ol>';
                    $('.' + h_sub_t + '-' + h_main).each(function () {
                        table_of_content_html += '<li><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a>';
                        var h_sub = $(this).attr('data-' + h_sub_t);
                        if ($('.' + h_subsub_t + '-' + h_sub).length) {
                            table_of_content_html += '<ol>';
                            $('.' + h_subsub_t + '-' + h_sub).each(function () {
                                table_of_content_html += '<li><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a></li>';
                            });
                            table_of_content_html += '</ol>';
                        }
                        table_of_content_html += '</li>';
                    });
                    table_of_content_html += '</ol>';
                }
                table_of_content_html += '</li>';
            });

            if (table_of_content_html) {
                // toggle button
                table_of_content_html = '<a class="toc-toggle active" href="javascript:void(0)"><i class="gis gi-angle-up"></i></a><ol>' + table_of_content_html + '</ol>';
                table_of_content_html = '<div id="toc" class="toc-' + TABLE_OF_CONTENT + '"><h2>' + trans('Table of Content') + '</h2>' + table_of_content_html + '</div>';

                // $('.post-body-inner').prepend(table_of_content_html);
            }

            // scroll to heading
            $('#toc a').click(function () {
                var id = $(this).attr('href');
                scroll_to($(id), 0);
            });

            // toc toggle
            $(document).on('click', '.toc-toggle', function () {
                if ($(this).is('.active')) {
                    $(this).removeClass('active');
                    $(this).find('i.gi').removeClass('gi-angle-up').addClass('gi-angle-down');
                    $('#toc ol').stop().slideUp();

                } else {
                    $(this).addClass('active');
                    $(this).find('i.gi').removeClass('gi-angle-down').addClass('gi-angle-up');
                    $('#toc ol').stop().slideDown();
                }
            });

            // jump to toc
            /*
            var jump2toc_tag = '<a href="#toc"> <i class="gis gi-angle-double-up"></i>';
            $(jump2toc_tag).appendTo($(	'.post-body-inner '+h_main_t+'[data-'+h_main_t+'], .post-body-inner '+h_sub_t+'[data-'+h_sub_t+']'));		
            */
        }
    }

    /*SHORTCODE MASTER*/
    /*contact and sidebar and post ads otpions shortcode*/



    $('.post-body-inner').each(function () {
        var html = $(this).html();


        var found_shortcode = false;
        if (html.has('[contact]')) {
            html = html.replace('[contact]', '<div class="blogger-contact-form"></div>');
            found_shortcode = true;
        }
        if (html.has('[full_width]')) {
            html = html.replaceAll('[full_width]', '<style type="text/css">#content{float:none!important;width:100%!important}#main-sidebar{display:none!important}</style>');
            found_shortcode = true;
        }
        if (html.has('[sidebar_left]')) {
            html = html.replaceAll('[sidebar_left]', '<style type="text/css">#content{float:right!important}#main-sidebar{float:left!important}</style>');
            found_shortcode = true;
        }
        if (html.has('[sidebar_right]')) {
            html = html.replaceAll('[sidebar_right]', '<style type="text/css">#content{float:left!important}#main-sidebar{float:right!important}</style>');
            found_shortcode = true;
        }
        if (html.has('[no_toc]')) {
            html = html.replaceAll('[no_toc]', '');
            found_shortcode = true;
            table_of_content_html = '';
        }

        if (is_item()) {
            if (html.has('[post_ads]')) {
                if (SHOW_INNER_POST_ADS_AT == 'none') {
                    html = html.replaceAll('[post_ads]', '');
                } else {
                    html = html.replaceAll('[post_ads]', '<div class="inner-post-ads"></div>');
                    found_shortcode = true;
                }
            }
            if (html.has('[post_ads_2]')) {
                if (SHOW_INNER_POST_ADS_AT == 'none') {
                    html = html.replaceAll('[post_ads_2]', '');
                } else {
                    html = html.replaceAll('[post_ads_2]', '<div class="inner-post-ads-2"></div>');
                    found_shortcode = true;
                }
            }
        }

        if (found_shortcode) {
            $(this).html(html);
            $('#ContactForm1').appendTo($('.post-body-inner .blogger-contact-form'));
        }

        if (!is_item()) {
            Inner_Post_Ads.remove();
            Inner_Post_Ads_2.remove();
        } else {
            // inner post ads auto position
            if (SHOW_INNER_POST_ADS_AT == 'br_tag') {
                var br_tag_counter = 0;
                $('.post-body-inner br').each(function () {
                    br_tag_counter++;
                    if (br_tag_counter == 4 && $('.inner-post-ads').length == 0) {
                        $('<div class="inner-post-ads"></div>').insertAfter($(this));
                    }
                    if (br_tag_counter == 8 && $('.inner-post-ads-2').length == 0) {
                        $('<div class="inner-post-ads-2"></div>').insertAfter($(this));
                    }
                });
            }
            else if (SHOW_INNER_POST_ADS_AT == 'p_tag') {
                var p_tag_counter = 0;
                $('.post-body-inner p').each(function () {
                    p_tag_counter++;
                    if (p_tag_counter == 4 && $('.inner-post-ads').length == 0) {
                        $('<div class="inner-post-ads"></div>').insertAfter($(this));
                    }
                    if (p_tag_counter == 8 && $('.inner-post-ads-2').length == 0) {
                        $('<div class="inner-post-ads-2"></div>').insertAfter($(this));
                    }
                });
            }
            else if ('middle' == SHOW_INNER_POST_ADS_AT) {
                var total_tag_counter = $('.post-body-inner br').length + $('.post-body-inner p').length;
                var tag_counter = 0;
                var inner_ads_counter = Inner_Post_Ads.length + Inner_Post_Ads_2.length;
                if (inner_ads_counter) {
                    $('.post-body-inner br, .post-body-inner p').each(function () {
                        tag_counter++;
                        if (tag_counter == Math.floor(total_tag_counter / (inner_ads_counter + 1))
                            && $('.inner-post-ads').length == 0
                        ) {
                            $('<div class="inner-post-ads"></div>').insertAfter($(this));
                        }
                        if (tag_counter == inner_ads_counter * Math.floor(total_tag_counter / (inner_ads_counter + 1))
                            && $('.inner-post-ads-2').length == 0
                        ) {
                            $('<div class="inner-post-ads-2"></div>').insertAfter($(this));
                        }
                    });
                }
            }
        }

        /* INNER POST 1 */
        // if not enabled post ads		
        if ($('.inner-post-ads').length == 0 || Inner_Post_Ads.length == 0 || Inner_Post_Ads.is(':empty') || $.trim(Inner_Post_Ads.html()).length == 0) {
            $('.inner-post-ads').remove();
            Inner_Post_Ads.remove();
        } else {
            // monitor size of ads until stable ADS_CHECK_SIZE_TIME times
            Inner_Post_Ads_Height = 0;
            Inner_Post_Ads_Prev_Height = 0;
            Inner_Post_Ads_Stable = 0;
            Inner_Post_Ads.css('visibility', 'hidden');
            Inner_Post_Ads_Monitor = setInterval(function () {
                Inner_Post_Ads_Height = Inner_Post_Ads.height();
                if (!Inner_Post_Ads_Height) {
                    return;
                }
                if (Inner_Post_Ads_Height != Inner_Post_Ads_Prev_Height) {
                    Inner_Post_Ads_Prev_Height = Inner_Post_Ads_Height;
                    Inner_Post_Ads_Stable = 0;
                    return;
                } else {
                    Inner_Post_Ads_Stable++;
                }

                if (Inner_Post_Ads_Stable >= ADS_CHECK_SIZE_TIME) {
                    clearInterval(Inner_Post_Ads_Monitor);
                    // stabled ads, now we move it to the ads spot
                    Inner_Post_Ads.appendTo($('.inner-post-ads'));
                    Inner_Post_Ads.css('visibility', 'visible');
                }
            }, DELAY_AD_LOAD);
        }


        /* INNER POST 2 */
        // if not enabled post ads	
        if ($('.inner-post-ads-2').length == 0 || Inner_Post_Ads_2.length == 0 || Inner_Post_Ads_2.is(':empty') || $.trim(Inner_Post_Ads_2.html()).length == 0) {
            $('.inner-post-ads-2').remove();
            Inner_Post_Ads_2.remove();
        } else {
            // monitor size of ads until stable ADS_CHECK_SIZE_TIME times
            Inner_Post_Ads_2_Height = 0;
            Inner_Post_Ads_2_Prev_Height = 0;
            Inner_Post_Ads_2_Stable = 0;
            Inner_Post_Ads_2.css('visibility', 'hidden');
            Inner_Post_Ads_2_Monitor = setInterval(function () {
                Inner_Post_Ads_2_Height = Inner_Post_Ads_2.height();
                if (!Inner_Post_Ads_2_Height) {
                    return;
                }
                if (Inner_Post_Ads_2_Height != Inner_Post_Ads_2_Prev_Height) {
                    Inner_Post_Ads_2_Prev_Height = Inner_Post_Ads_2_Height;
                    Inner_Post_Ads_2_Stable = 0;
                    return;
                } else {
                    Inner_Post_Ads_2_Stable++;
                }

                if (Inner_Post_Ads_2_Stable >= ADS_CHECK_SIZE_TIME) {
                    clearInterval(Inner_Post_Ads_2_Monitor);

                    // stabled ads, now we move it to the ads spot				
                    Inner_Post_Ads_2.appendTo($('.inner-post-ads-2'));
                    Inner_Post_Ads_2.css('visibility', 'visible');
                }
            }, DELAY_AD_LOAD);
        } // end of inner post ads 2 slot
    });

    /*
    social lock content shortcode
    */
    var share_url = get_canonicalUrl(tn_url.current) + '?id=' + tn_blog.postId;
    var unlocked = false;

    if (get_option('unlocked-' + tn_blog.postId) != 'unlocked' &&
        !is_empty(tn_query['referrer']) &&
        !is_empty(tn_query['id']) &&
        tn_query['id'] == tn_blog.postId &&
        !is_empty(tn_url.referrer)) {

        if (tn_url.referrer.indexOf('facebook') != -1) {
            unlocked = (
                tn_query['referrer'] == 'facebook-' + tn_query['id'] &&
                !is_empty(tn_query['fbclid'])
            );
        } else if (
            tn_url.referrer.indexOf('twitter') != -1 ||
            tn_url.referrer.indexOf('t.co') != -1
        ) {
            unlocked = (
                tn_query['referrer'] == 'twitter-' + tn_query['id']
            );
        }
    }

    $('.post-body-inner').each(function () {
        var html = $(this).html();
        var tag_selector_start = 'magone-lock-start';
        var tag_selector_end = 'magone-lock-end';
        var tag_html_start = '<span class="' + tag_selector_start + '"></span>';
        var tag_html_end = '<span class="' + tag_selector_end + '"></span>';
        var key_start = '[lock]';
        var key_end = '[/lock]';


        // this post has no locked content, just return
        if (!html.has('[lock]') || !html.has('[/lock]')) {
            // only take action with post have [lock] shortcodes
            return;
        }

        // this post was unlocked before, just leave it alone
        if (get_option('unlocked-' + tn_blog.postId) == 'unlocked') {
            html = html.replaceAll(key_start, '').replaceAll(key_end, '');
            $(this).html(html);
            return;
        }

        // else, create locker
        $(this).html($(this).html().replaceAll(key_start, tag_html_start).replaceAll(key_end, tag_html_end));
        unwrap_tag('.post-body-inner .' + tag_selector_start, '.post-body-inner', tag_html_start);
        unwrap_tag('.post-body-inner .' + tag_selector_end, '.post-body-inner', tag_html_end);

        // scan wrap content
        html = $(this).html();
        var index = 0;
        var start = 0;
        var end = 0;

        for (var i = 0; i < 100; i++) {
            start = html.indexOf(tag_html_start, index);
            if (start == -1) {
                break;
            }
            end = html.indexOf(tag_html_end, index);
            if (end == -1) {
                break;
            }

            var before = html.substring(0, start);
            var after = html.substring(end + tag_html_end.length);
            var middle = html.substring(start + tag_html_start.length, end);

            if (!unlocked) {
                middle =
                    (
                        '<div class="locked-content shad">\
                        <div class="inner">\
                            <div class="overlay overlay-1 bg"></div>\
                            <div class="overlay overlay-2"></div>\
                            <i class="color gis gi-lock"></i>\
                            <h2 class="color locked-content-title">'+ trans('THIS PREMIUM CONTENT IS LOCKED') + '</h2>\
                            <h3 class="locked-content-sub-title step-1">'+ trans('STEP 1: Share to a social network') + '</h3>\
                            <div class="locked-content-actions">\
                                <div class="fb-share-button facebook" data-href="'+ (share_url + '&referrer=facebook-' + tn_blog.postId) + '" data-layout="button_count" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(share_url + '&referrer=facebook') + '"><i class="gib gi-facebook"></i> Facebook</a></div>\
                                <a href="https://twitter.com/intent/tweet?url='+ encodeURIComponent(share_url + '&referrer=twitter-' + tn_blog.postId) + '&text=' + encodeURIComponent(tn_blog.pageTitle) + '" class="twitter" target="_blank">\
                                    <i class="gib gi-twitter"></i> Tweet\
                                </a>\
                            </div>\
                            <h3 class="locked-content-sub-title step-2">'+ trans('STEP 2: Click the link on your social network') + '</h3>\
                            '+ DIVCLEAR + '\
                        </div>\
                    </div>'
                    )
            }

            html = before + middle + after;
            end = start + tag_html_start.length;
        }
        $(this).html(html);

    });
    if (unlocked) {
        update_option('unlocked-' + tn_blog.postId, 'unlocked');
    }

    /*post pagination : page break*/
    function post_body_pagination_update(max, page_number) {
        $('.post-page.active').removeClass('active');
        $('.post-page-button-number.active').removeClass('active');
        $('.post-page-button-' + page_number).addClass('active');
        $('.post-page-' + page_number).addClass('active');

        if (page_number == max) {
            $('.post-page-button-prev').removeClass('active').attr('href', '#post-page-number-' + page_number);
            $('.post-page-button-next').addClass('active').attr('href', '#post-page-number-' + (page_number + 1));
        } else if (page_number == 0) {
            $('.post-page-button-prev').addClass('active').attr('href', '#post-page-number-1');
            $('.post-page-button-next').removeClass('active').attr('href', '#post-page-number-2');;
        } else {
            $('.post-page-button-prev').removeClass('active').attr('href', '#post-page-number-' + page_number);
            $('.post-page-button-next').removeClass('active').attr('href', '#post-page-number-' + (page_number + 1));
        }
    }
    $('.post-body-inner').each(function () {
        // replace pagination shortcodes to dom elements
        var html = $(this).html();
        var key = '<span class="magone-next-page"></span>';

        if (html.indexOf('[next]') == -1) {
            // only take action with post have [next] shortcodes
            return;
        }

        // replace all shortcodes with a searchable elements
        $(this).html($(this).html().replaceAll('[next]', key));
        if ($('.post-pagination').length) {
            unwrap_tag('.post-body-inner .magone-next-page', '.post-body-inner', key);


            // create pagination html
            pages = $(this).html().split(key);

            html = '';
            nav_html = '';
            for (var i = 0; i < pages.length; i++) {
                var page_class = 'post-page post-page-' + i;
                var nav_class = 'post-page-button post-page-button-number post-page-button-' + i;
                if (i == 0) {
                    page_class += ' active';
                    nav_class += ' active';
                }
                html += '<div class="' + page_class + '" id="post-page-' + i + '">' + pages[i] + '</div>';
                nav_html += '<a href="#post-page-number-' + (i + 1) + '" class="' + nav_class + '" data-id="' + i + '">' + (i + 1) + '</a>';
            }

            nav_html = DIVCLEAR
                + '<div class="post-page-buttons">'
                + '<h4 class="post-section-title">'
                + trans('PAGES')
                + '</h4>'
                + '<a href="#post-page-number-1" class="post-page-button post-page-button-prev active"><i class="gis gi-angle-left"></i></a>'
                + nav_html
                + '<a href="#post-page-number-2" class="post-page-button post-page-button-next" data-max="' + (pages.length - 1) + '"><i class="gis gi-angle-right"></i></a>'
                + '<a href="#post-page-full" class="post-page-button post-page-button-view-all">' + trans('View All') + '</a>'
                + DIVCLEAR
                + '</div>'
                + DIVCLEAR;

            $(this).html(html);

            // get current url has full page hash, just show all and return
            if (tn_url.hash == '#post-page-full') {
                $('.post-page').addClass('active');
                return;
            }

            // else, show pagination buttons
            $('.post-pagination').html(nav_html);

            // if current url has page number in hash, show current number and modify page number for next / prev
            if (tn_url.hash.has('#post-page-number-')) {
                var current_page_number_in_url = tn_url.hash.replace('#post-page-number-', '');
                if (is_number(current_page_number_in_url)) {
                    current_page_number_in_url = Number(current_page_number_in_url) - 1;
                    if (current_page_number_in_url >= 0) {
                        post_body_pagination_update(pages.length - 1, current_page_number_in_url);
                    }
                }
            }


            // post pagination effect
            $('.post-page-button').click(function () {
                if ($(this).is('.active')) {
                    return;
                }
                if (RELOAD_POST_PAGINATION) {

                    var href = $(this).attr('href');
                    var loc = tn_url.current.split('#');
                    window.location.href = loc[0] + href;
                    location.reload();
                    return true;
                }
                var max = Number($('.post-page-button-next').attr('data-max'));
                var id = Number($('.post-page-button-number.active').attr('data-id'));

                // get the id
                if ($(this).is('.post-page-button-number')) {
                    id = Number($(this).attr('data-id'));
                } else if ($(this).is('.post-page-button-view-all')) {
                    $('.post-page').addClass('active');
                    $('.post-page-buttons').remove();
                    scroll_to('.post-body', 300);
                    return;
                } else if ($(this).is('.post-page-button-next')) {
                    id++;

                    if (id > max) {
                        id = max;
                    }
                } else if ($(this).is('.post-page-button-prev')) {
                    id--;
                    if (id < 0) {
                        id = 0;
                    }
                }

                // change next / prev, number button and page status
                post_body_pagination_update(max, id);
                scroll_to('.post-body', 300);
            });
        } // end if post-pagination length
    });

    /*stuff shortcodes*/
    // button shortcode
    $('.post-body-inner a').each(function () {
        var button_text = $.trim($(this).text());
        var button_html = $(this).html();

        if (button_text.indexOf('[') != 0 || button_text.lastIndexOf(']') != button_text.length - 1) {
            return;
        }
        button_html = button_html.replace('[', '');
        var end_square_bracket = button_html.lastIndexOf(']');
        button_html = button_html.substring(0, end_square_bracket) + button_html.substring(end_square_bracket + 1);

        // replace icon in button text
        $(this).html(replace_icon_marker(button_html)).addClass('button');
    });

    $('.post-body-inner .button').each(function () {
        // clone background
        var background_child = $(this).find('[style*="background-color"]');
        if (background_child.length) {
            $(this).css('background-color', $(background_child[0]).css('background-color'));
        }

        // override with background from wrapped parrent
        var background_parent = $(this).parent('[style*="background-color"]');
        if (background_parent.length) {
            for (var i = 0; i < background_parent.length; i++) {
                if ($.trim($(background_parent[i]).text()) == $.trim($(this).text())) {
                    $(this).css('background-color', $(background_parent[0]).css('background-color'));
                    $(background_parent[i]).css('background-color', '');
                    break;
                }
            }
        }

        // clone font-size
        var font_size_child = $(this).find('[style*="font-size"]');
        if (font_size_child.length) {
            $(this).css('font-size', $(font_size_child[0]).css('font-size'));
        }

        // clone color
        // override with background from wrapped parrent
        var color_parent = $(this).parent('[style*="color:"]');
        if (color_parent.length) {
            for (var i = 0; i < color_parent.length; i++) {
                if ($.trim($(color_parent[i]).text()) == $.trim($(this).text())) {
                    $(this).css('color', $(color_parent[0]).css('color'));
                    break;
                }
            }
        }


        $(this).append('<span class="button-overlay"></span>');
    });
    $('.post-body-inner .button').append('<span class="button-overlay"></span>');

    // drop cap shortcode
    // case 1: span strike
    $('.post-body-inner span, .post-body-inner font').each(function () {
        var dc_style = $(this).attr('style');
        var dc_font = $(this).attr('size');

        if ($(this).is('span') &&
            (
                typeof (dc_style) == 'undefined' ||
                !dc_style ||
                dc_style.indexOf('font-size') == -1 ||
                dc_style.indexOf('x-large') == -1
            )
        ) {
            return;
        }
        if ($(this).is('font') &&
            (
                typeof (dc_font) == 'undefined' ||
                dc_font != '6'
            )
        ) {
            return;
        }

        if ($(this).find('strike').length == 0 &&
            !$(this).parent().is('strike')
        ) {
            return;
        }

        var dc_text = $(this).text();
        if (dc_text.length > 3) {
            return;
        }
        $(this).addClass('dropcap color firstcharacter').css('font-size', '').html(dc_text);
    });
    // case 2: strike span
    $('.post-body-inner strike').each(function () {
        if ($(this).find('span').length == 0) {
            return;
        }
        var dc_span = $(this).find('span');
        var dc_style = dc_span.attr('style');
        if (typeof (dc_style) == 'undefined' || !dc_style || dc_style.indexOf('font-size') == -1 || dc_style.indexOf('x-large') == -1) {
            return;
        }
        var dc_text = dc_span.text();
        if (dc_text.length > 3) {
            return;
        }
        dc_span.addClass('dropcap color firstcharacter').css('font-size', '').html(dc_text);
        $(this).addClass('dropcap-wrapper');
    });

    /*code box*/
    $('.post-body-inner blockquote').each(function () {
        var box_html = $(this).html();
        var box_text = $.trim($(this).text());
        if (box_text.indexOf('[') != 0 || box_text.lastIndexOf(']') != box_text.length - 1) {
            return;
        }

        // remove square bracket out of message HTML	
        box_html = box_html.replace('[', '');
        var end_square_bracket = box_html.lastIndexOf(']');
        box_html = box_html.substring(0, end_square_bracket) + box_html.substring(end_square_bracket + 1);

        $(this).replaceWith('<pre class="code-box">' + box_html + '</pre>');
    });
    function selectText(element) {
        var doc = document;
        var text = doc.getElementById(element);
        var range;
        var selection;

        if (doc.body.createTextRange) { //ms
            range = doc.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) { //all others
            selection = window.getSelection();
            range = doc.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    var pre_index = 0;
    $('.post-body-inner .code-box').each(function () {
        $(this).attr('id', 'pre-' + pre_index);
        var pre_header_html = '<div class="clear"></div><div class="pre-header rel">';

        if ('execCommand' in document) {
            pre_header_html += '<a href="javascript:void(0)" class="bg copy-all" data-id="' + pre_index + '">' + trans('Copy All Code') + '</a> ';
        } else if ('getSelection' in window || 'createTextRange' in document.body) {
            pre_header_html += '<a href="javascript:void(0)" class="bg select-all" data-id="' + pre_index + '">' + trans('Select All Code') + '</a> ';
        }
        pre_header_html += '<div class="clear"></div></div>';
        $(pre_header_html).insertBefore($('#pre-' + pre_index));
        pre_index++;
    });

    $('.pre-header .select-all').click(function () {
        var data_id = $(this).attr('data-id');
        selectText('pre-' + data_id);
    });
    $('.pre-header .copy-all').click(function () {
        $(this).parent().find('.copy-all-message').stop().remove();
        var data_id = $(this).attr('data-id');
        selectText('pre-' + data_id);
        var msg_html = '';
        var msg_class = '';
        if (document.execCommand("Copy")) {
            msg_html += trans('All codes were copied to your clipboard');
            msg_class = 'success';
        } else {
            msg_html += trans('Can not copy the codes / texts, please press [CTRL]+[C] (or CMD+C with Mac) to copy');
            msg_class = 'error';
        }
        msg_html = '<div class="copy-all-message abs ' + msg_class + '">' + msg_html + '</div>';
        $(msg_html).insertAfter($(this));
        var control = $($(this).parent().find('.copy-all-message'));
        setTimeout(function () {
            if (control.is('.success')) {
                control.fadeOut(2000);
            }
        }, 1000);
    });



    /*blockquote*/
    $('.post-body-inner blockquote').each(function () {
        $(this).html('<div class="blockquote-icon"><i class="gis gi-quote-left"></i></div><div class="blockquote-content">' + $(this).html() + '</div>');
    });

    /*tab:toggle:vtab:col*/
    var Shortcode_Listing_Id = 0;

    function shortcode_listing_content(shortcode, holder) {

        var content_html = '';
        var content = new Object();
        content.main = new Array();
        content.sub = new Array();
        var shortcode_id = shortcode + '-' + Shortcode_Listing_Id;

        // the structure
/*
<ul style="text-align: left;"><!-- The holder -->
    <li>[cols]</li>
    <ul><!-- content container -->
        <li><b>Pros</b></li><!-- This is for main 0 -->
        <ul><!-- This is for sub 0 -->
            <li><b>Excellent Overall Performance</b></li>
            <li><b>Large, Stunning OLED Display</b></li>
            <li><b>Refreshing and Simplified Design</b></li>
            <li><b>Premium Build and Construction</b></li>
            <li><b>Clean, feature-packed software</b></li>
            <li><b>Solid Battery Life</b></li>
        </ul>
        <li><b>Cons</b></li><!-- This is for main 1 -->
        <ul><!-- This is for sub 1 -->
            <li><b>Charging could be faster for its price</b></li>
            <li><b>System eats a big chunk of storage</b></li>
            <li><b>It could have included 1080MP sensor like Ultra model</b></li>
        </ul>
    </ul>
</ul>
*/

        // get header
        $(holder).find('>ul>li').each(function(){
            content.main.push($(this).html());
        })
        // get content
        $(holder).find('>ul>ul').each(function(){
            const li = $(this).find('>li');
            if (li.length > 1) {
                content.sub.push('<ul>' + $(this).html() + '</ul>');
            } else if (li.length == 1) {
                content.sub.push(li.html());
            } else {
                content.sub.push('');
            }
        })

        // replace icon marker
        for (var i = 0; i < content.main.length; i++) {
            content.main[i] = replace_icon_marker(content.main[i]);
            content.sub[i] = replace_icon_marker(content.sub[i]);
        }


        // re map shortcode alias
        switch (shortcode) {
            case 'tabs':
                shortcode = 'tab';
                break;

            case 'vtabs':
                shortcode = 'vtab';
                break;

            case 'toggle':
            case 'toggles':
                shortcode = 'accordion';
                break;

            case 'cols':
            case 'column':
            case 'columns':
                shortcode = 'col';
                console.log(content);
                break;

            case 'msg':
                shortcode = 'message';
                break;
        }

        // replace content
        switch (shortcode) {
            case 'tab':
            case 'vtab':
                for (var i = 0; i < content.main.length; i++) {
                    content_html += '<li class="tab-title"><a href="#' + shortcode_id + '-' + i + '">' + content.main[i] + '</a></li>';
                }
                content_html = '<ul class="tab-header">' + content_html + '</ul>';
                for (var i = 0; i < content.sub.length; i++) {
                    content_html += '<div id="' + shortcode_id + '-' + i + '" class="tab-content"><div class="inner">' + content.sub[i] + '</div></div>';
                }
                break;
            case 'accordion':
                for (var i = 0; i < content.main.length; i++) {
                    content_html += '<h3>'
                        + '<a href="javascript:void(0)" class="accordion-title accordion-title-' + i + '"><span class="accordion-title-text">' + content.main[i] + '</span><i class="gis gi-angle-down accordion-title-icon-inactive accordion-title-icon"></i><i class="gis gi-angle-up accordion-title-icon-active accordion-title-icon"></i></a>'
                        + '</h3>'
                        + '<div class="accordion-content"><div class="inner">'
                        + content.sub[i] + '</div></div>';
                }
                break;
            case 'col':
                for (var i = 0; i < content.main.length; i++) {
                    content_html += ('<div class="col col-' + i + '">' + content.main[i] + content.sub[i] + '</div>');
                }
                break;
            case 'message':
                for (var i = 0; i < content.main.length; i++) {
                    content_html += '<div class="message-title">' + content.main[i] + '</div><div class="message-content">' + content.sub[i] + '</div>';
                }
                break;
        }

        content_html = DIVCLEAR + '<div id="' + shortcode_id + '" class="shortcode-listing shortcode-' + shortcode + '">' + content_html + DIVCLEAR + '</div>' + DIVCLEAR;

        $(holder).replaceWith(content_html);
        Shortcode_Listing_Id++;
    }

    ////////////////////////////////////////////////////////////////
    // parse shortcode
    ////////////////////////////////////////////////////////////////
    $('.post-body-inner ul').each(function () {
        var nested_child = $(this).children('li');

        if (nested_child.length != 1) {
            return;
        }
        var shortcode = nested_child.text();
        if (shortcode.indexOf('[') != 0 || shortcode.lastIndexOf(']') != shortcode.length - 1) {
            return;
        }
        shortcode = shortcode.replace('[', '').replace(']', '');
        shortcode = shortcode.toLowerCase();


        switch (shortcode) {
            case 'tab':
            case 'tabs':
            case 'vtab':
            case 'vtabs':
            case 'accordion':
            case 'toggle':
            case 'toggles':
            case 'col':
            case 'cols':
            case 'column':
            case 'columns':
            case 'message':
            case 'msg':
                break;
            default:
                return;
        }


        shortcode_listing_content(shortcode, this);
    });


    // apply jquery ui for shortcode html, also modify column ui

    if ($('.shortcode-tab').length ||
        $('.shortcode-vtab').length ||
        $('.shortcode-accordion').length
    ) {
        $('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" async="true"><' + '/script>');
        var wait_jqui = setInterval(function () {
            if (typeof ($.ui) !== 'undefined') {
                clearInterval(wait_jqui);
                wait_jqui = null;
                // apply for tabs:
                $('.shortcode-tab').tabs();
                $('.shortcode-vtab').tabs();

                // apply for accordion
                $('.shortcode-accordion').accordion({ heightStyle: 'content', collapsible: true });
            }
        }, 1000);
    }


    // apply for column
    $('.shortcode-col .col.col-1').each(function () {
        var col = $(this).parent().find('.col');
        var col_total = col.length;
        if (col_total == 0) {
            return;
        }
        var col_margin = $(this).css('margin-left');
        if (is_rtl()) {
            col_margin = $(this).css('margin-right');
        }
        col_margin = Number(col_margin.replace('px', ''));
        var post_width = $('.post-body-inner').width();
        var col_margin_percent = 100 * col_margin / post_width;
        var col_width = (100 - col_margin_percent * (col_total - 1)) / col_total;
        col_width = col_width.toFixed(2) - 0.01;
        col.css('width', col_width + '%');
    });

    // remake message 
    $('.shortcode-message > div').each(function () {
        // clone background
        var background_child = $(this).find('[style*="background-color"]');
        if (background_child.length) {
            $(this).css('background-color', $(background_child[0]).css('background-color'));
        }
    });

    /*-----END OF SHORTCODE MASTER----*/

    // late appending
    if (table_of_content_html) {
        $('.post-body-inner').prepend(table_of_content_html);
    }




    /* after post body content */
    /*post labels*/
    $(document).find('.post-labels .post-label').each(function () {
        let name = $(this).find('.label-name').text();
        let url = $(this).attr('href').replace('?m=0', '').replace('?m=1', '');
        let slug = escape_url(name);

        for (let label of tn_blog.label) {
            if (label.name == name ||
                label.url == url ||
                label.slug == slug) {

                $(this).find('.label-count-value').html(label.count)
                return;
            }
        }
        $(this).remove();
    })

    /*post share*/
    $('.post-share-buttons-url').on('focus', function () {
        select_all($(this));
    });
    $('.post-share-buttons-holder .addthis_sharing_toolbox').each(function () {
        if (navigator.userAgent.indexOf('UCBrowser') != -1) {
            $(this).remove();
            $('.ie-sharing-buttons').show();
        }
    });




    /*post related*/
    if (NUM_RELATED_POST && is_number(NUM_RELATED_POST)) {
        function related_post_json_url() {
            // find all label in post which has number post > NUM_RELATED_POST
            var id = -1;
            var occur = new Array();
            var lowest_count = -1;
            var lowest_id = -1;
            for (var i = 0; i < tn_blog.postLabel.length; i++) {
                for (var j = 0; j < tn_blog.label.length; j++) {
                    if (tn_blog.postLabel[i] == tn_blog.label[j].url) {
                        if (id == -1) {
                            id = j;
                        }
                        if (tn_blog.label[j].count > NUM_RELATED_POST) {
                            if (-1 == lowest_count || lowest_count > tn_blog.label[j].count) {
                                lowest_count = tn_blog.label[j].count;
                                lowest_id = j;
                            }

                            occur.push(j);
                        }
                    }
                }
            }

            // get the latest 		
            // if found a list, rand one index
            if (occur.length) {
                if ('lowest' == RELATED_POST_SOURCE) {
                    id = lowest_id;
                } else {
                    id = randInt(0, occur.length - 1);
                    id = occur[id];
                }

            }

            if (id == -1) {
                $('.post-related').remove();
                return;
            }


            // start index of blogger json always larger or equal 1.
            // will will rand from 1 and to total with padding = number post we want + 1
            // why + 1? because may in the posts we got, they have current inside.

            var total_post = tn_blog.label[id].count;
            var start_index = randInt(1, total_post - NUM_RELATED_POST - 1);

            if (start_index < 1) {
                start_index = 1;
            }


            return (tn_url.feed + '/posts/default/-/' + tn_blog.label[id].slug + '?max-results=' + (NUM_RELATED_POST + 1) + '&start-index=' + start_index + '&alt=json-in-script');

        }
        function related_post_content(json) {
            json = b_valid_json(json);
            if (!json) {
                return;
            }
            json = new b_parse_json(json);

            if (json.entry.length == 0) {
                return;
            }

            var start = -1;
            if (json.entry.length <= NUM_RELATED_POST) {
                start = 0;
            }
            for (var i = 0; i < json.entry.length; i++) {
                if (json.entry[i].id == tn_blog.postId) {
                    start = 0;
                    break;
                }
            }

            if (start == -1) {
                start = randInt(0, 1);
            }

            // create html for related posts
            var ret = '';
            var index = 0;
            if (json.entry.length > 1) {
                for (var i = start; i < json.entry.length && index < NUM_RELATED_POST; i++) {
                    var e = json.entry[i];
                    if (e.id == tn_blog.postId) {
                        continue;
                    }
                    var wide_class = '';
                    if ((i == json.entry.length - 1 || index == NUM_RELATED_POST - 1) && index % 2 == 0) {
                        wide_class = 'post-related-item-wide';
                    }
                    ret += '<div ' + get_item_class(index, 'post-related-item post-related-item-' + index + ' ' + wide_class, 'shad') + '>'
                        + get_the_thumbnail(e)
                        + get_the_title(e)
                        + '</div>';
                    index++;
                }

                ret += DIVCLEAR;
            } else {
                ret += trans('Not found any posts') + DIVCLEAR;
            }

            $('.post-related-content').html(ret);
            optimize_thumbnail($('.post-related-content .item-thumbnail img'));
        }

        if ($('.post-related').length && tn_blog.postLabel.length) {
            var ret = '<div class="post-related-inner shad">'
                + '<div class="shad post-related-header">'
                + '<h4>' + trans('RECOMMENDED FOR YOU') + '</h4>'
                + '<a class="post-related-random-button" href="javascript:void(0)"><i class="gis gi-random"></i></a>'
                + DIVCLEAR
                + '</div>'
                + '<div class="post-related-content">'
                + '<div class="loader">Loading...</div>'
                + '</div>'
                + DIVCLEAR
                + '</div>';
            $('.post-related').html(ret);


            $.get(related_post_json_url(), function (json) {
                related_post_content(json)
            }, "jsonp");

            $(document).on('click', '.post-related-random-button', function () {
                $('.post-related-content').html('<div class="loader">Loading...</div>');
                $.get(related_post_json_url(), function (json) {
                    related_post_content(json)
                }, "jsonp");
            });
        }
    }

    /* TEMPLATE LIBRARY END HERE		*/
    /* <------------------------------- */

    // console.log('The widget END');
    // console.log(tn_widget);

    /* YOUR SCRIPTS START HERE */
    /* ####################### */
    /*BUILT-IN ACTIONS*/
    /*widget with parameter actions*/
    function social_icons_show(widget) {
        if (widget.section_id == 'header-section') {
            widget.find('.widget-item-control').remove();
            $('.header-social-icons').html(widget.find('.widget-content').html());
            widget.remove();
            return;
        }
        widget.show();
    }



    function image_list_show(image_list) {

    }
    function tab_list_show(tab_list) {
        // style for tab link width
        // console.log(tab_list);
        var style = '';
        if (tab_list.length) {
            style = ' style="width:' + (100 / tab_list.length - 0.01) + '%"';
        }

        for (var i = 0; i < tab_list.length; i++) {
            if (i == 0) {
                tab_list[0].show();
                // optimize_thumbnail($('#'+tab_list[0].id+' .item-thumbnail img'));
            } else {
                tab_list[i].hide();
            }

            // remake title
            $('#' + tab_list[i].id + ' > h2').remove();
            $('#' + tab_list[i].id + ' h2.widget-title').remove();
            $('#' + tab_list[i].id + ' .feed-widget-header').remove();

            var title_code = '';
            for (var j = 0; j < tab_list.length; j++) {
                var tab_link_class = ' class="tab-link';
                if (j == i) {
                    tab_link_class += ' active';
                }
                tab_link_class += '"';
                // show / hide tab widget
                var tab_on_click = ' onclick="';
                for (var k = 0; k < tab_list.length; k++) {
                    if (k != j) {
                        tab_on_click += '$(\'#' + tab_list[k].id + '\').hide();';
                    } else {
                        tab_on_click += '$(\'#' + tab_list[k].id + '\').show();';
                    }
                }
                tab_on_click += '"';

                // append title
                title_code += '<a href="#' + tab_list[j].id + '-link"' + tab_link_class + tab_on_click + style + '>\
                    <span class="tab-link-inner">'+ tab_list[j].title + '\
                        <span class="tab-link-arrow"></span>\
                    </span>\
                </a>';
            }
            $('#' + tab_list[i].id).prepend('<h2 class="tab-title" style="display: block;">' + title_code + DIVCLEAR + '</h2>' + DIVCLEAR);
        }
    }

    $('.tab-link').click(function (e) {
        e.preventDefault()
        var wid_id = $(this).attr('href').replace('-link', '');
        optimize_thumbnail($(wid_id + ' .item-thumbnail img'));
        return false;
    })

    // count feed url and get
    function feed_get(widget, index) {
        if (!is_viewing(widget) || widget.is('.loading') || !widget.is('.pending')) {
            return;
        }


        if (!is_set(index)) {
            index = 0;
        }
        widget.content_index = index;

        // add loading bar
        // - empty content widget 
        if (typeof (widget.content[index]) == 'undefined' && (!widget.selectAll)) {
            widget.removeClass('pending loading');
            widget.find('widget-content').html('<div class="empty">' + trans('Not found any posts') + '</div>');
            return;
        }
        // loading content of widget
        else {
            widget.addClass('loading');
            widget.find('.widget-content').html('<div class="loader">Loading...</div>');
        }

        // valid data
        if (!is_number(widget.param.count)) {
            widget.param.count = 6;
        }
        var max_result = Number(widget.param.count);
        var start_index = 1;
        var label = '';
        if (!widget.selectAll) {
            label = '/-/' + widget.content[index].slug;	// load certain label, if not selected all
        }


        var source = 'posts'
        var orderby = 'recent'

        if (is_set(widget.param.source)) {
            source = widget.param.source.toLowerCase();
            if (source.has('random')) {
                orderby = 'random';
            }
            if (source.has('oldest')) {
                orderby = 'oldest';
            }
            if (source.has('comment')) {
                source = 'comments';
            } else {
                source = 'posts';
            }
        } else {
            widget.param.source = 'recent-posts';
        }

        var total = ((source == 'comments') ? tn_blog.totalComments : tn_blog.totalPosts);

        if (orderby == 'oldest' || orderby == 'random') {
            // console.log('load total = ' + total);
            if (!widget.selectAll) {
                total = get_label_count(widget.content[index].slug);
            }

            if (total == -1) {
                // did not catch total before, we must load blank json to get this info
                max_result = 0;
                widget.nested_json = true;
            } else {
                // if has total, modify start index depending on certain purpose			
                if (orderby == 'oldest') { // oldest first
                    start_index = total - max_result + 1;
                } else { // random items
                    start_index = randInt(1, total - max_result + 1);
                }
            }
        }


        if (!is_empty(widget.param.host) && widget.param.host.has('.')) {
            if (!widget.param.host.has('http://') && !widget.param.host.has('https://') && widget.param.host.indexOf('//') != 0) {
                widget.param.host = 'https://' + widget.param.host;
            }

            if (
                !is_empty(widget.param.topic) &&
                widget.param.topic != 'false' &&
                widget.param.topic != 'hide' &&
                widget.param.topic != 'none' &&
                widget.param.topic != 'no' &&
                widget.param.topic != 'true' &&
                widget.param.topic != 'show' &&
                widget.param.topic != 'enable' &&
                widget.param.topic != 'yes' &&
                isNaN(widget.param.topic)
            ) {
                label = '/-/' + widget.param.topic;

            }


            widget.json_url = widget.param.host + '/feeds/' + source + '/default' + label + '?alt=json-in-script&max-results=' + max_result;
        } else {
            widget.json_url = tn_url.feed + '/' + source + '/default' + label + '?alt=json-in-script&max-results=' + max_result;
        }

        // show post follow pagination if url contains it
        var page_in_url = 1;
        if (tn_url.hash.has('#' + widget.id + '-p-') && orderby == 'recent') {
            page_in_url = tn_url.hash.replace('#' + widget.id + '-p-', '');
            if (is_number(page_in_url)) {
                page_in_url = Number(page_in_url);
                // update start index
                start_index = ((page_in_url - 1) * Number(widget.param.count) + 1);
            } else {
                page_in_url = 1;
            }
        }

        // call json
        $.get(widget.json_url + '&start-index=' + start_index, function (json) {
            widget.removeClass('loading');

            // if show random or oldest but did not catch the total
            // we must reload again
            if (is_set(widget.param.source) && (widget.param.source.has('oldest') || widget.param.source.has('random'))) {
                if (widget.param.source.has('comment')) {
                    if (tn_blog.totalComments == -1 || (typeof (widget.nested_json) != 'undefined' && widget.nested_json == true)) {
                        json = b_valid_json(json);
                        if (!json) {
                            return;
                        }
                        json = new b_parse_json(json);
                        tn_blog.totalComments = json.total_entry;
                        feed_get(widget, widget.content_index);
                        widget.nested_json = false;
                        return;
                    }
                } else {
                    if (tn_blog.totalPosts == -1 || (typeof (widget.nested_json) != 'undefined' && widget.nested_json == true)) {
                        json = b_valid_json(json);
                        if (!json) {
                            return;
                        }
                        json = new b_parse_json(json);
                        tn_blog.totalPosts = json.total_entry;
                        feed_get(widget, widget.content_index);
                        widget.nested_json = false;
                        return;
                    }
                }
            }
            // show content of loaded json
            feed_content_show(widget, json);
            widget.removeClass('pending');

            // if recent item, can enable pagination
            if (!(is_set(widget.param.source) && (widget.param.source.has('oldest') || widget.param.source.has('random')))
                && widget.type != 'popularposts'
                && is_enable(widget.param.pages)) {
                feed_pagination_show(widget, json, page_in_url);
            }

        }, "jsonp");
    }


    // process widget color design
    /*
    $color paramenters:
        - $color: change color scheme
        - $boxbg: change background color of widget
        - $textcolor: text color of widget
        - $thumbbg: thumbnail background color, 
            allow rainbow, if start with ^ we will show as overlay
            input 0 to use the key color of site
    
    a, .color {color: $(keycolor);}
    .border {border-color: $(keycolor);}
    .bg {background-color: $(keycolor);}
    .slider-item .item-readmore:hover {background: $(keycolor)}
    .owl-dot.active {background: $(keycolor);}
    .feed.widget .feed-widget-header {border-color: $(keycolor);}
    .feed.widget.box-title h2.widget-title {background: $(keycolor);}
    */

    function feed_widget_color(widget) {
        var style = '';
        var wid = '#' + widget.id;
        if (is_set(widget.param.color)) {
            var color = widget.param.color;
            style += (
                wid + ' a,\
    '+ wid + ' .color {color: ' + color + '}\
    '+ wid + ' .border,\
    '+ wid + ' .feed-widget-header {border-color: ' + color + '}\
    '+ wid + ' .bg,\
    '+ wid + '.box-title h2.widget-title,\
    '+ wid + ' .slider-item .item-readmore:hover,\
    '+ wid + ' .grid-item .item-readmore:hover,\
    '+ wid + ' .owl-dot.active {background: ' + color + '}\
    '+ wid + '.box-title h2.widget-title a,\
    '+ wid + ' .item-labels a,\
    '+ wid + ' .item-title a,\
    '+ wid + ' .meta-item,\
    '+ wid + ' .feed-widget-labels a,\
    '+ wid + ' .slider-item .item-readmore,\
    '+ wid + '.sticky .item-0 a.item-readmore, \
    '+ wid + ' .grid-item .item-readmore {color: white}\
    '+ wid + ' .item-sub .item-title a {color:' + $('body').css('color') + '} \
    '+ wid + '.sticky .item-sub .item-title a {color:white}\
    '+ wid + ' .slider-item .meta-item i[class*="gi"],\
    '+ wid + ' .grid-item .meta-item i[class*="gi"] {color: ' + color + '}\
    '+ wid + '.complex .than-0 .item-labels,\
    '+ wid + '.blogging .item-labels,\
    '+ wid + '.left .item-extra .item-labels,\
    '+ wid + '.right .item-extra .item-labels,\
    '+ wid + '.ticker .item-labels {background: none}\
    '+ wid + '.complex .than-0 .item-labels a,\
    '+ wid + '.complex .item-sub .meta-item,\
    '+ wid + '.blogging .item-labels a,\
    '+ wid + '.left .item-extra .item-labels a,\
    '+ wid + '.right .item-extra .item-labels a,\
    '+ wid + '.ticker .item-labels a {color: ' + color + '}\
    '+ wid + '.complex .than-0 .item-title a,\
    '+ wid + '.blogging .item-title a,\
    '+ wid + '.one .meta-item,\
    '+ wid + '.left .item-extra .item-title a,\
    '+ wid + '.right .item-extra .item-title a,\
    '+ wid + '.ticker .item-title a {color: ' + $('body').css('color') + '}\
    '+ wid + '.three .meta-item,\
    '+ wid + '.blogging .meta-item,\
    '+ wid + '.left .item-sub .meta-item,\
    '+ wid + '.right .item-sub .meta-item {color: ' + $('body').css('color') + '}\
    ');
        }

        if (is_set(widget.param.tbg) && widget.param.tbg != 'rainbow') {
            style += wid + ' .thumbnail-overlay {\
                background-color: '+ widget.param.tbg + ';\
                background-image: -webkit-linear-gradient(135deg,'+ widget.param.tbg + ',#000);\
                background-image: -moz-linear-gradient(135deg,'+ widget.param.tbg + ',#000);\
                background-image: -o-linear-gradient(135deg,'+ widget.param.tbg + ',#000);\
                background-image: linear-gradient(135deg,'+ widget.param.tbg + ',#000);\
            }';
        }

        if (style) {
            style = '<style type="text/css">' + style + '</style>';
        }
        return style;
    }

    // create widget frame tags
    function feed_show(widget) {
        // valid data
        var html = '';
        var hh_1 = '';
        var hh_2 = '';
        var hh_3 = '';
        var pre_url = '';
        var target = '';
        if (!is_empty(widget.param.host)) {
            pre_url = widget.param.host;
            target = ' target="_blank"';
        }

        // create widget header
        if (widget.title) {
            hh_1 += '<h2 class="widget-title feed-widget-title">';
            if (widget.content.length == 1) {
                // target to first label if has only 1 label
                hh_1 += '<a href="' + pre_url + set_label_url(widget.content[0].slug) + '"' + target + '>' + widget.title + '</a>';
                hh_3 += '<div class="feed-widget-viewall"><a href="' + pre_url + set_label_url(widget.content[0].slug) + '"' + target + '><span>' + trans('VIEW ALL') + '</span> <i class="gis gi-chevron-right"></i></a></div>';
            } else if (widget.selectAll) {
                // target to latest posts if user selected all labels
                hh_1 += '<a href="' + pre_url + '/search"' + target + '>' + widget.title + '</a>';
                hh_3 += '<div class="feed-widget-viewall"><a href="' + pre_url + '/search"' + target + '>' + trans('VIEW ALL') + ' <i class="gis gi-chevron-right"></i></a></div>';
            } else if (widget.content.length) {
                // in other case show plain text only
                hh_1 += '<span>' + widget.title + '</span>';
                hh_3 += '<div class="feed-widget-viewall"><a href="' + pre_url + set_label_url(widget.content[0].slug) + '"' + target + '><span>' + trans('VIEW ALL') + '</span> <i class="gis gi-chevron-right"></i></a></div>';
            }
            hh_1 += '</h2>';
        }

        // the list of labels
        if (widget.content.length > 1 && !widget.selectAll) {
            hh_2 += '<div class="feed-widget-labels">';
            hh_2 += '<ul class="bg">';
            for (var i = 0; i < widget.content.length; i++) {
                var link = widget.content[i];
                hh_2 += '<li><a href="javascript: void(0)" ' + ((i == 0) ? 'class="active" ' : '') + 'data-i="' + i + '"><span class="check"><i class="gis gi-check"></i></span> ' + link.name + ' <span class="down"><i class="gis gi-angle-down"></i></span></a></li>';
            }
            hh_2 += '</ul>';
            hh_2 += '</div>';
        }
        if (!is_enable(widget.param.viewall)) {
            hh_3 = '';
        }
        if (hh_1 || hh_2 || hh_3) {
            html += '<div class="feed-widget-header">' + hh_1 + hh_2 + hh_3 + DIVCLEAR + '</div>';
        }


        // widget content
        html += '<div class="widget-content feed-widget-content widget-content-' + widget.id + '" id="widget-content-' + widget.id + '">';
        if (widget.content.length) {
            html += '<div class="loader">Loading...</div>';
        } else if (!widget.selectAll) {
            html += '<div class="empty">' + trans('Not found any posts') + '</div>';
        }

        html += '</div>'
            + DIVCLEAR;

        // default pages param is false, not like other param
        if (!is_set(widget.param.pages)) {
            widget.param.pages = false;
        }

        if (is_enable(widget.param.pages)) {
            html += DIVCLEAR +
                '<div class="feed-widget-pagination"></div>' +
                DIVCLEAR;
        }

        html += feed_widget_color(widget);

        widget.html(html).show();

        if (widget.content.length || widget.selectAll) {
            feed_get(widget);
        }

        // modify layout
        if (widget.param.type == 'left') {
            $(DIVCLEAR).insertBefore(widget);
        } else if (widget.param.type == 'right') {
            $(DIVCLEAR).insertAfter(widget);
        } else {
            $(DIVCLEAR).insertBefore(widget);
            $(DIVCLEAR).insertAfter(widget);
        }
    }

    function misc_show(widget) {
        if (widget.type == 'followbyemail' && widget.param.desc) {
            widget.find('.widget-content').prepend('<div class="desc">' + widget.param.desc + '</div>');
        }
        if (widget.type == 'image' && is_set(widget.param.quote)) {
            widget.addClass('quote');
            widget.prepend('<div class="item-thumbnail quote-background" style="opacity:0"><img src="' + widget.content.src + '"/></div>');
            var quote = '<div class="quote-icon"><i class="gis gi-quote-left"></i></div>'
                + '<div class="quote-content">' + widget.content.caption + '</div>'
                + '<div class="quote-author"> - ';
            if (widget.content.href) {
                quote += '<a href="' + widget.content.href + '">' + widget.param.quote + '</a>';
            } else {
                quote += widget.param.quote
            }
            quote += '</div>' + DIVCLEAR;

            widget.find('.widget-content').html(quote);
            widget.find('.item-thumbnail').css('height', (widget.outerHeight() * 117 / 100) + 'px');
            optimize_thumbnail(widget.find('.item-thumbnail img'));
            widget.find('.item-thumbnail').animate({ 'opacity': 0.3 }, 500);
        }

        if (widget.type == 'html' && widget.section_id == 'content-section-2') {
            archive_page_show(widget);
            return;
        }

        widget.show();
    }


    /*CUSTOM ACTIONS*/
    /*custom function*/
    /*Shortcut to get entry information*/
    function post_format_icon(format) {
        if (!is_set(format)) {
            format = 'standard';
        }
        var ret = '<i class="gi-solid gi-';
        switch (format) {
            case 'video':
                ret += 'play';
                break;
            case 'audio':
                ret += 'microphone';
                break;
            case 'image':
                ret += 'camera';
                break;
            default:
                ret += 'newspaper';
                break;
        }
        return (ret + '"></i>');
    }

    function get_the_author(entry, avatar, link) {
        var ret = '';

        if (!entry.param.author || typeof (entry.author) == 'undefined') {
            return '';
        }

        if (typeof (avatar) == 'undefined') {
            avatar = false; // true show avatar image as icon, false: use fontawesome
        }
        if (typeof (link) == 'undefined') {
            link = entry.author.uri;
        }
        if ('' == link && 'Tien Nguyen' == entry.author.name) {
            link = 'https://sneeit.com';
        }


        if (avatar) {
            if (is_string(avatar)) {
                if (avatar.has('.') && avatar.has(':') && avatar.has('http')) {
                    ret += '<img class="avatar" src="' + avatar + '"/>';// custom image
                } else {
                    ret += '<span class="avatar">' + avatar + '</span>';// string prefix
                }
            } else {
                ret += '<img class="avatar" src="' + entry.author.avatar + '"/>';// avatar from database
            }
        } else {
            ret += '<i class="gi-regular gi-user gi-lg gi-light"></i>';
        }

        ret += ' <span>' + entry.author.name + '</span>';

        /*
        if (link == 'none' || link == false) {
            return ret;
        }
        */

        if (!is_empty(link)) {
            return ('<a href="' + link + '" target="_blank" class="meta-item meta-item-author" rel="noopener noreferrer">' + ret + '</a>');
        } else {
            return ('<a class="meta-item meta-item-author" href="#unlink-profile">' + ret + '</a>');
        }
    }
    function get_the_date(entry) {
        if (!entry.param.date || typeof (entry.published) == 'undefined') {
            return '';
        }
        date = entry.published;
        /*	
        date = date.split('-');
        if (date.length > 2) {
            date[1] = Number(date[1]) + 1;
            if (date[1] > 12) {
                date[1] = 12;
            }
            date[1] = date[1].toString();
            if (date[1].length < 2) {
                date[1] = '0' + date[1];
            }
            
        }
        date = date.join('-');
        */

        return '<a class="meta-item meta-item-date" href="' + entry.link + '"><i class="gi-regular gi-clock gi-lg gi-light"></i> <span>' + b_format_date(date, DATE_FORMAT) + '</span></a>';
    }
    function get_comment_number(entry) {
        if (!entry.param.comment || typeof (entry.reply_number) == 'undefined') {
            return '';
        }
        return '<a	class="meta-item meta-item-comment-number" href="' + entry.link + '#comments"><i class="gi-regular gi-comment gi-flip gi-lg gi-light"></i> <span>' + entry.reply_number + '</span></a>';
    }
    function get_the_title(entry) {
        if (!is_enable(entry.param.title)) {
            return '';
        }
        return '<h3 class="item-title"><a href="' + entry.link + '">' + entry.title + '</a></h3>';
    }
    function get_the_snippet(entry) {
        if ((!entry.param.snippet) || (!entry.summary)) {
            return '';
        }

        var summary = entry.summary;

        if (is_number(entry.param.snippet) && summary.length > Number(entry.param.snippet) && Number(entry.param.snippet) >= 10) {
            summary = summary.substring(0, Number(entry.param.snippet)) + '...';
        }
        else {
            summary = summary.substring(0, 150) + '...';
        }
        return '<div class="item-snippet">' + summary + '</div>';
    }
    function get_readmore_link(entry) {
        if (!entry.param.readmore) {
            return '';
        }
        return '<div class="item-readmore-wrapper"><a class="item-readmore" href="' + entry.link + '#more">' + trans('Readmore') + '</a></div>';
    }
    function get_the_thumbnail(entry, size, inner) {
        var natural = false;
        if (typeof (inner) == 'undefined') {
            inner = false;
        }
        if (!is_set(entry.param)) {
            entry.param = new Object();
            entry.param.icon = false;
        }

        if (!is_set(size)) {
            size = 1600;// size = natural-nnn for natural thumnail
        } else if (is_string(size) && size.has('natural-')) {
            size = size.replace('natural-', '');
            natural = true;
        }
        if (isNaN(size)) {
            size = 1600;
        }
        size = Number(size);

        if (size != -1) {
            // resize to very small size to decrease first load speed		
            if (natural) {
                entry.thumbnail = b_resize_image(entry.thumbnail, size, false, true);
            } else {
                entry.thumbnail = b_resize_image(entry.thumbnail, 86, false, true);
            }
        }


        var ret = '<a href="' + entry.link + '" class="thumbnail ' + (natural ? 'natural' : 'item') + '-thumbnail">';
        ret += '<img src="' + entry.thumbnail + '" alt="' + entry.title_attr + '" loading="lazy" decoding="async"/>';
        if (inner && is_enable(entry.param.icon) && typeof (entry.format) != 'undefined') {
            ret += '<span class="item-icon"><span class="item-icon-inner">' + post_format_icon(entry.format) + '</span></span>';
        }

        // thumbnail background
        if (is_set(entry.param.tbg)) {
            ret += '<span class="thumbnail-overlay"></span>';
        }
        ret += '</a>';
        if (!inner && is_enable(entry.param.icon) && typeof (entry.format) != 'undefined') {
            ret += '<a href="' + entry.link + '" class="item-icon"><span class="item-icon-inner">' + post_format_icon(entry.format) + '</span></a>';
        }

        return ret;
    }
    function get_the_labels(entry, extra_class) {
        var ret = '';
        var count = 1;
        var pre_url = '';
        var target = '';
        if (!is_empty(entry.param.host)) {
            pre_url = entry.param.host;
            target = ' target="_blank"';
        }

        if (is_empty(entry.cate)) {
            return '';
        }
        if (is_empty(entry.param.cate)) {
            return '';
        }
        if (typeof (extra_class) == 'undefined') {
            extra_class = '';
        }

        if (is_number(entry.param.cate)) {
            count = Number(entry.param.cate);
        }

        for (var i = 0; i < entry.cate.length && i < count; i++) {
            if (ret) {
                ret += '<span>, </span>';
            }
            if (entry.id != 'popularposts') {
                ret += '<a href="' + pre_url + set_label_url(encodeURIComponent(entry.cate[i])) + '"' + target + '>' + entry.cate[i] + '</a>';
            }
            else {
                ret = '<a href="' + entry.link + '">' + entry.cate[i] + '</a>';
            }
        }

        return ('<div class="' + extra_class + ' item-labels">' + ret + '</div>');
    }

    function get_item_class(i, extra, exclude) {
        if (!is_set(extra)) {
            extra = '';
        }
        if (is_string(extra)) {
            extra = $.trim(extra);
            extra = extra.split(' ');
        }
        if (!is_mixed(extra)) {
            extra = new Array();
        }

        if (!is_set(exclude)) {
            exclude = new Array();
        }
        if (is_string(exclude)) {
            exclude = $.trim(exclude);
            exclude = exclude.split(' ');
        }
        if (!is_mixed(exclude)) {
            exclude = new Array();
        }
        var item_class = 'shad item item-' + i;
        if (i % 2 == 0) {
            item_class += ' item-two';
        }
        if (i % 3 == 0) {
            item_class += ' item-three';
        }
        if (i % 4 == 0) {
            item_class += ' item-four';
        }
        for (var j = 1; j <= i; j++) {
            item_class += ' than-' + (j - 1);
        }
        if (extra.length) {
            item_class += ' ' + extra.join(' ');
        }
        item_class = item_class.split(' ');
        for (var k = 0; k < exclude.length; k++) {
            for (var key in item_class) {
                if (item_class[key] == exclude[k]) {
                    item_class.splice(key, 1);
                }
            }
        }

        return (' class="' + item_class.join(' ') + '"');
    }
    function get_the_meta(entry, format) {
        var ret = '';
        if (!entry.param.meta ||
            (
                typeof (entry.author) == 'undefined' &&
                typeof (entry.reply_number) == 'undefined' &&
                typeof (entry.published) == 'undefined'
            )
        ) {
            return '';
        }
        if (!is_set(format)) {
            format = 'acd'; // author comment date
        }

        ret = format.split('');
        for (var i = 0; i < ret.length; i++) {
            if (ret[i] == 'a') {
                ret[i] = get_the_author(entry);
            } else if (ret[i] == 'c') {
                ret[i] = get_comment_number(entry);
            } else if (ret[i] == 'd') {
                ret[i] = get_the_date(entry);
            }
        }
        ret = ret.join('');

        if (ret) {
            ret = '<div class="meta-items">' + ret + '</div>'
        }

        return ret;
    }

    /*FEED CONTENT*/
    function feed_pagination_load(widget, page_number) {
        widget.find('.widget-content').html('<div class="loader">Loading...</div>');
        $.get(widget.json_url + '&start-index=' + ((page_number - 1) * Number(widget.param.count) + 1), function (json) {
            // first load widget
            feed_content_show(widget, json);
        }, "jsonp");
    }
    function feed_pagination_update_status(widget, page_number) {
        var max_page = Number(widget.attr('data-max_page'));
        var count = Number(widget.param.count);
        var total = Number(widget.attr('data-total'));

        // update information
        var number_listed = count * page_number;
        if (number_listed >= total) {
            number_listed = total;
        }
        widget.find('.feed-widget-pagination-info .value').html(number_listed);

        // set active statement
        widget.find('.feed-widget-pagination-button.active').removeClass('active');
        widget.find('.feed-widget-pagination-button-' + page_number).addClass('active');
        widget.find('.feed-widget-pagination-separator').hide();
        widget.find('.feed-widget-pagination-button').hide();

        // show pagination number and separator depend of the clicked butt
        // show around active buttons	
        widget.find('.feed-widget-pagination-button-' + (page_number - 1)).show();
        widget.find('.feed-widget-pagination-button-' + page_number).show();
        widget.find('.feed-widget-pagination-button-' + (page_number + 1)).show();
        if (page_number == 1) {
            widget.find('.feed-widget-pagination-button-3').show();
        }
        if (page_number == max_page) {
            widget.find('.feed-widget-pagination-button-' + (max_page - 2)).show();
        }

        // show separate buttons
        if (max_page > 4) { // number button normally showing at beginning
            if (page_number - 2 > 1) {
                // because we show page_number - 1, so if page number - 2 > 1 
                // we will have a gap from the first button
                widget.find('.feed-widget-pagination-separator-1').show();
            }
            if (page_number + 2 < max_page) {
                // similar with when counting gap for max button
                widget.find('.feed-widget-pagination-separator-' + (max_page - 1)).show();
            }
        }

        // always show first and last
        widget.find('.feed-widget-pagination-button-1').show();
        widget.find('.feed-widget-pagination-button-' + max_page).show();
    }

    // count json url, call feed and add pagination
    function feed_pagination_show(widget, json, current_page) {
        // pagination maker
        json = b_valid_json(json);
        if (!json) {
            return;
        }
        json = new b_parse_json(json);
        // update widget content if have no any posts
        if (json.entry.length == 0) {
            widget.addClass('no-post').find('.widget-content').html(trans('Not found any post match with your request'));
            return;
        }
        if (typeof (current_page) == 'undefined') {
            current_page = 1;
        }

        var max_page = Math.ceil(json.total_entry / widget.param.count);

        if (max_page > 1) {
            widget.attr('data-max_page', max_page);
            widget.attr('data-total', json.total_entry);

            var ret = '';
            for (var i = 1; i <= max_page; i++) {
                ret += '<a href="#' + widget.id + '-p-' + i + '" class="shad feed-widget-pagination-button feed-widget-pagination-button-' + i + '">' + i + '</a>';
                if (i == 1 || i == max_page - 1) {
                    ret += '<span class="feed-widget-pagination-separator feed-widget-pagination-separator-' + i + '">...</span>';
                }
            }

            var page_info = '<span class="feed-widget-pagination-info"><span class="value">' + json.entry.length + '</span> / ' + json.total_entry + ' ' + trans('POSTS') + '</span>';


            ret += page_info;
            widget.find('.feed-widget-pagination').html(ret + DIVCLEAR);
            feed_pagination_update_status(widget, current_page);

            // when click pagination
            widget.find('.feed-widget-pagination-button').click(function () {
                if ($(this).is('.active')) {
                    return;
                }

                var page_number = Number($(this).html());
                feed_pagination_load(widget, page_number);
                feed_pagination_update_status(widget, page_number);
                scroll_to(widget, 100);
            });
        }
    }




    // show widget content based on json and widget data
    function feed_content_show(widget, json) {
        if (typeof (json) != 'undefined') {
            json = b_valid_json(json);
            if (!json) {
                return;
            }
            json = new b_parse_json(json);
        } else if (typeof (widget.json) != 'undefined') {
            json = widget.json;
        } else {
            return;
        }

        if (json.entry.length == 0) {
            return;
        }
        if (!is_set(widget.param.icon)) {
            widget.param.icon = false;
        }
        if (!is_set(widget.param.title)) {
            widget.param.title = true;
        }
        if (widget.param.title == 'out-of-thumbnail' || widget.param.title == 'out-of-thumb') {
            widget.param.title = 'oot';
        }

        // shorten code
        var wp = widget.param;

        // console.log(wp);

        // children params relationship
        wp.author = is_enable(wp.author);
        wp.comment = is_enable(wp.comment);
        wp.date = is_enable(wp.date);
        wp.meta = is_enable(wp.meta);
        if (!wp.meta) {
            wp.author = wp.comment = wp.date = false;
        } else if (wp.author || wp.comment || wp.date) {
            wp.meta = true;
        } else {
            wp.meta = false;
        }
        wp.snippet = is_enable(wp.snippet);
        wp.readmore = is_enable(wp.readmore);
        wp.cate = is_enable(wp.cate);

        if (is_set(wp.height) && (wp.height == 'auto' || wp.height == '0')) {
            widget.addClass('auto-height');
        } else {
            widget.addClass('fix-height');
        }

        if (is_enable(wp.icon)) {
            widget.addClass('show-icon');
        } else {
            widget.addClass('none-icon');
        }

        // widget content
        var ret = '';
        var ret_0 = '';
        var ret_1 = '';
        var ret_2 = '';
        var ret_3 = '';
        var page_total = 1;
        var page_first = json.entry.length;
        var page_other = 0;
        var ret_mobile = '';

        if (wp.type == 'grid') {
            // find page information for GRID widget
            if (json.entry.length > 5) {
                page_total = Math.ceil(json.entry.length / 5);
                // for (page_other = 1; page_other <= 5; page_other++) { // use this if want first page always crowder than other pages
                for (page_other = 5; page_other >= 1; page_other -= 1) { // use this if want other pages always crowder than first page
                    page_first = json.entry.length - (page_total - 1) * page_other;
                    if (Math.abs(page_first - page_other) <= 2) {
                        break;
                    }
                }
            }
            if (page_other > 5) {
                page_other = 5;
                page_first = json.entry.length - page_total * page_other;
            }
        }

        // fill widget content with items
        for (var i = 0; i < json.entry.length; i++) {
            var e = json.entry[i];
            e.param = wp;

            switch (wp.type) {
                case 'slider':
                    ret += '<div class="item slider-item slider-item-' + i + '"><div class="slider-item-inner">'
                        + get_the_thumbnail(e, 900)
                        + '<div class="slider-item-content">'
                        + get_the_labels(e, 'bg')
                        + get_the_meta(e, 'cad')
                        + get_the_title(e)
                        + get_the_snippet(e)
                        + get_readmore_link(e)
                        + '</div>' /*slider-item-content*/
                        + '</div></div>';/* slide-item and inner */
                    // console.log(e.link);				
                    break;

                case 'sticky':
                    var thumb_size = 520;
                    if (i != 1 && i != 2 && i != 3 && is_set(wp.height) && (wp.height == 'auto' || wp.height == 0)) {
                        thumb_size = 'natural-520';
                    }
                    if (i == 4) {
                        ret += DIVCLEAR;
                    }
                    ret += '<div ' + get_item_class(i, (i >= 4) ? ' item-extra' : '') + '>'
                        + '<div class="item-main">'
                        + get_the_thumbnail(e, thumb_size)
                        + '<div class="item-content gradient">'
                        + get_the_labels(e, 'bg')
                        + (wp.title != 'oot' || i != 0 ? get_the_title(e) : '')
                        + (i == 0 ? get_the_author(e, trans('By')) : '')
                        + '</div>'
                        + '</div>';
                    if (i == 0 && (wp.snippet || wp.meta || wp.readmore || wp.title == 'oot')) {
                        ret += '<div class="item-sub bg">'
                            + (wp.title == 'oot' && i == 0 ? get_the_title(e) : '')
                            + get_the_snippet(e) + get_readmore_link(e)
                            + get_the_meta(e, 'cd')
                            + '</div>';
                    }
                    ret += '</div>';
                    break;

                case 'complex':
                    var thumb_size = 450;
                    if (i == 0 && is_set(wp.height) && (wp.height == 'auto' || wp.height == 0)) {
                        thumb_size = 'natural-450';
                    }
                    if (i % 2 == 0 && i >= 4) {
                        ret += DIVCLEAR;
                    }
                    ret += '<div ' + get_item_class(i, (i >= 4) ? ' item-extra' : '') + '>'
                        + '<div class="item-main">'
                        + (i == 0 ? get_the_thumbnail(e, thumb_size) : '')
                        + '<div class="item-content' + (i == 0 ? ' gradient' : '') + '">'
                        + get_the_labels(e, (i == 0 ? 'bg' : ''))
                        + (wp.title != 'oot' || i != 0 ? get_the_title(e) : '')
                        + (i == 0 ? get_the_author(e, trans('By')) : '')
                        + '</div>'
                        + '</div>';
                    if (i == 0 && (wp.snippet || wp.meta || wp.readmore || wp.title == 'oot')) {
                        ret += '<div class="item-sub">'
                            + (wp.title == 'oot' ? get_the_title(e) : '')
                            + get_the_snippet(e) + get_readmore_link(e)
                            + get_the_meta(e, 'cd')
                            + '</div>';
                    }
                    ret += '</div>';
                    break;

                case 'three':
                    var thumb_size = 500;
                    if (i == 0 && is_set(wp.height) && (wp.height == 'auto' || wp.height == 0)) {
                        thumb_size = 'natural-500';
                    }

                    ret = '<div ' + get_item_class(i) + '>'
                        + '<div class="item-main">'
                        + get_the_thumbnail(e, thumb_size)
                        + '<div class="item-content gradient">'
                        + get_the_labels(e, 'bg')
                        + (wp.title != 'oot' ? get_the_title(e) : '')
                        + '</div>'
                        + '</div>';
                    if (wp.snippet || wp.meta || wp.readmore || wp.title == 'oot') {
                        ret += '<div class="item-sub">'
                            + (wp.title == 'oot' ? get_the_title(e) : '')
                            + get_the_snippet(e)
                            + get_readmore_link(e)
                            + get_the_meta(e)
                            + '</div>';
                    }
                    ret += '</div>';

                    if (i % 3 == 0) {
                        ret_1 += ret;
                    } else if (i % 3 == 1) {
                        ret_2 += ret;
                    } else {
                        ret_3 += ret;
                    }
                    ret_mobile += ret;
                    ret_0 += ret;
                    if (i % 3 == 2) {
                        ret_0 += DIVCLEAR;
                    }


                    break;

                case 'carousel':
                    ret += '<div class="item carousel-item carousel-item-' + i + '"><div class="carousel-item-inner">'
                        + get_the_thumbnail(e, 640)
                        + '<div class="carousel-item-content item-content gradient">'
                        + get_the_labels(e, 'bg')
                        + get_the_title(e)
                        + '</div>' /*carousel-item-content*/
                        + '</div></div>';/* carousel-item and inner */
                    break;

                case 'blogging':
                    var thumb_size = 320;
                    if (i == 0 && is_set(wp.height) && (wp.height == 'auto' || wp.height == 0)) {
                        thumb_size = 'natural-320';
                    }

                    ret += '<div '
                        + get_item_class(
                            i,
                            (!e.has_thumbnail ? ' no-thumbnail' : '')
                            + (i == json.entry.length - 1 ? ' item-last' : '')
                        )
                        + '>'
                        + ((e.has_thumbnail) ? get_the_thumbnail(e, thumb_size, true) : '')
                        + '<div class="item-content">'
                        + get_the_labels(e)
                        + get_the_title(e)
                        + get_the_meta(e)
                        + '<div class="item-sub">' + get_the_snippet(e) + get_readmore_link(e) + '</div>'
                        + DIVCLEAR
                        + '</div>' + DIVCLEAR/*end item content*/
                        + '</div>'; // end item

                    break;

                case 'one':
                    var thumb_size = 900;
                    if (is_set(wp.height) && (wp.height == 'auto' || wp.height == 0)) {
                        thumb_size = 'natural-900';
                    }
                    ret += '<div '
                        + get_item_class(
                            i,
                            (i == json.entry.length - 1 ? ' item-last' : '')
                        )
                        + '>'
                        + '<div class="item-main">'
                        + get_the_thumbnail(e, thumb_size)
                        + '<div class="item-content gradient">'
                        + get_the_labels(e, 'bg')
                        + (wp.title != 'oot' ? get_the_title(e) : '')
                        + '</div>'
                        + '</div>';
                    if (wp.snippet || wp.meta || wp.readmore || wp.title == 'oot') {
                        ret += '<div class="item-sub">'
                            + (wp.title == 'oot' ? get_the_title(e) : '')
                            + get_the_meta(e)
                            + get_the_snippet(e)
                            + get_readmore_link(e)
                            + '</div>'
                            + DIVCLEAR;
                    }
                    ret += '</div>';// end item

                    break;

                case 'left':
                case 'right':
                    var thumb_size = 450;
                    if (is_set(wp.height) && (wp.height == 'auto' || wp.height == '0')) {
                        thumb_size = 'natural-450';
                    }
                    ret += '<div ' + get_item_class(i, i > 0 ? ' item-extra' : '') + '>'
                        + '<div class="item-main">'
                        + (i == 0 ? get_the_thumbnail(e, thumb_size) : '')
                        + '<div class="item-content' + (i == 0 ? ' gradient' : '') + '">'
                        + get_the_labels(e, (i == 0 ? 'bg' : ''))
                        + (wp.title != 'oot' || i != 0 ? get_the_title(e) : '')
                        + (i == 0 ? get_the_author(e, trans('By')) : '')
                        + '</div>'
                        + '</div>';
                    if (i == 0 && (wp.snippet || wp.meta || wp.readmore || wp.title == 'oot')) {
                        ret += '<div class="item-sub">'
                            + (wp.title == 'oot' ? get_the_title(e) : '')
                            + get_the_snippet(e)
                            + get_readmore_link(e)
                            + get_the_meta(e, 'cd')
                            + '</div>'
                            + DIVCLEAR;
                    }
                    ret += '</div>';// end item
                    break;

                case 'two':
                    var thumb_size = 450;
                    if (is_set(wp.height) && (wp.height == 'auto' || wp.height == '0')) {
                        thumb_size = 'natural-450';
                    }
                    ret = '<div ' + get_item_class(i) + '>'
                        + '<div class="item-main">'
                        + get_the_thumbnail(e, thumb_size)
                        + '<div class="item-content gradient">'
                        + get_the_labels(e, 'bg')
                        + (wp.title != 'oot' ? get_the_title(e) : '')
                        + get_the_author(e, trans('By'))
                        + '</div>'
                        + '</div>';
                    if (wp.snippet || wp.meta || wp.readmore || wp.title == 'oot') {
                        ret += '<div class="item-sub">'
                            + (wp.title == 'oot' ? get_the_title(e) : '')
                            + get_the_snippet(e)
                            + get_readmore_link(e)
                            + get_the_meta(e, 'cd')
                            + '</div>'
                            + DIVCLEAR;
                    }
                    ret += '</div>';// end item

                    if (i % 2) {
                        ret_2 += ret;
                    } else {
                        ret_1 += ret;
                    }
                    ret_mobile += ret;
                    ret_0 += ret;
                    if (i % 2 == 1) {
                        ret_0 += DIVCLEAR;
                    }
                    break;

                case 'ticker':
                    var thumb_size = 320;
                    if (is_set(wp.height) && is_number(wp.height) && Number(wp.height) > 0) {
                        thumb_size = Number(wp.height);
                    }
                    ret += '<div class="ticker-item carousel-item-' + i + '"><div class="ticker-item-inner">'
                        + get_the_thumbnail(e, thumb_size)
                        + '<div class="ticker-item-content">'
                        + get_the_labels(e)
                        + get_the_title(e)
                        + '</div>' /*ticker-item-content*/
                        + '</div></div>';/* ticker-item and inner */
                    break;

                case 'grid':
                    var page_current = 0;
                    if (i >= page_first) {
                        page_current = Math.ceil((i + 1 - page_first) / page_other);
                    }
                    var start_index = 0;
                    if (page_current >= 1) {
                        start_index = (page_current - 1) * page_other + page_first;
                    }
                    var page_layout = (page_current == 0 ? page_first : page_other);
                    var page_type = (page_current % 2 ? 'odd' : 'even');
                    var start_next_sub_index = (page_type == 'even' ? (start_index + 1) : (start_index + page_layout - 1));

                    if (i == start_index) {
                        // close previous page and its end sub
                        if (i > 0) {
                            ret += DIVCLEAR + '</div>' + DIVCLEAR + '</div>';
                        }

                        // and open a new page										
                        ret += '<div class="grid-page">';

                        // also open the first sub page
                        var sub_style = '';
                        if (is_set(wp.height) && is_number(wp.height)) {
                            sub_style += ' style="height:' + wp.height + 'px"';
                        }
                        ret += '<div class="grid-sub grid-sub-' + (json.entry.length == 1 ? 'full' : (page_type == 'even' ? 'wide' : 'narrow')) + ' grid-sub-' + (page_type == 'even' ? 1 : (page_layout - 1)) + '"' + sub_style + '>';

                    }

                    // determine if it's started of next sub-page
                    var start_sub_index = start_index;

                    if (i == start_next_sub_index) {
                        ret += DIVCLEAR + '</div>';

                        // start new sub
                        var sub_style = '';
                        if (is_set(wp.height) && is_number(wp.height)) {
                            sub_style += ' style="height:' + wp.height + 'px"';
                        }
                        ret += '<div class="grid-sub grid-sub-' + (json.entry.length == 1 ? 'full' : (page_type == 'even' ? 'narrow' : 'wide')) + ' grid-sub-' + (page_type == 'even' ? (page_layout - 1) : 1) + '"' + sub_style + '>';
                    }
                    if (i >= start_next_sub_index) {
                        start_sub_index = start_next_sub_index;
                    }

                    // add item to grid page
                    ret += '<div class="item grid-item grid-item-' + i + ' grid-sub-item-' + (i - start_sub_index) + '"><div class="grid-item-inner">'
                        + get_the_thumbnail(e, 500)
                        + '<div class="grid-item-content item-content gradient">'
                        + get_the_labels(e, 'bg')
                        + get_the_meta(e)
                        + get_the_title(e)
                        + get_the_snippet(e)
                        + get_readmore_link(e)
                        + '</div>' /*grid-item-content*/
                        + '</div></div>';/* grid-item and inner */

                    if (i == json.entry.length - 1) {
                        // close sub-page and last page
                        ret += DIVCLEAR + '</div>' + DIVCLEAR + '</div>';
                    }
                    break;

                case 'list':
                    ret += '<div ' + get_item_class(i, ' table') + '>\
                        <div class="tr">\
                            <div class="td">\
                                <h2 class="item-title">\
                                    <a href="'+ e.link + '">\
                                        '+ (is_enable(wp.author) && is_set(e.author) ? ('<span class="meta-item meta-item-author">' + e.author.name + ':</span>') : '') + '\
                                        <span class="title-name">'+ e.title + '</span>\
                                        '+ (is_enable(wp.comment) && is_set(e.reply_number) ? ('<span class="color meta-item mete-item-comment-number"><i class="gi-regular gi-comment gi-flip gi-lg gi-light"></i> ' + e.reply_number + '</span>') : '') + '\
                                    </a>\
                                </h2>\
                                '+ (is_enable(wp.date) && is_set(e.published) ? ('<span class="meta-item meta-item-date">' + get_the_date(e) + '</span>') : '') + '\
                            </div>\
                            '+ (is_enable(wp.readmore) ?
                            '<div class="td item-readmore" style="width:1em;">\
                                <a href="'+ e.link + '#more"><i class="gis gi-angle-right"></i></a>\
                            </div>': '') + '\
                        </div>\
                    </div>'+ DIVCLEAR;
                    break;

                default:
                    break;
            }
        } // end entry loop


        // pre-made content
        if (wp.type == 'two') {
            if (is_set(wp.height) && (wp.height == 'auto' || wp.height == '0')) {
                ret = '<div class="two-col two-col-left col-1">' + ret_1 + '</div>'
                    + '<div class="two-col two-col-right col-2">' + ret_2 + '</div>'
                    + '<div class="two-col-mobile mobile">' + ret_mobile + '</div>';
            } else {
                ret = ret_0;
            }
        }
        if (wp.type == 'three') {
            if (is_set(wp.height) && (wp.height == 'auto' || wp.height == '0')) {
                ret = '<div class="three-col col-1">' + ret_1 + '</div>'
                    + '<div class="three-col col-2">' + ret_2 + '</div>'
                    + '<div class="three-col col-3">' + ret_3 + '</div>'
                    + '<div class="three-col-mobile mobile">' + ret_mobile + '</div>';
            } else {
                ret = ret_0;
            }
        }

        // show content
        widget.find('.widget-content').html(ret).css('opacity', 0).each(function () {
            if (is_number(wp.height) && Number(wp.height) > 0) {
                $('#widget-content-' + widget.id + ' .item-thumbnail').css('height', wp.height + 'px');
                if (wp.type == 'slider' || wp.type == 'carousel') {
                    $('#widget-content-' + widget.id + ' .' + wp.type + '-item').css('height', wp.height + 'px');
                } else if (wp.type == 'sticky') {
                    $('#widget-content-' + widget.id + ' .item-1 .item-thumbnail,#widget-content-' + widget.id + ' .item-2 .item-thumbnail,#widget-content-' + widget.id + ' .item-3 .item-thumbnail').removeAttr('style');
                }
            }
            optimize_thumbnail($(this).find('.item-thumbnail img'));
        }).animate({ 'opacity': 1 }, 1000);

        // color rainbow style
        if (is_set(wp.tbg) && wp.tbg == 'rainbow') {
            var index = 0;
            widget.find('.thumbnail-overlay').each(function () {
                var style = 'background-color: ' + THUMBNAIL_RAINBOW_COLORS[index].split(',')[0] + ';\
                background-image: -webkit-linear-gradient(135deg,'+ THUMBNAIL_RAINBOW_COLORS[index] + ');\
                background-image: -moz-linear-gradient(135deg,'+ THUMBNAIL_RAINBOW_COLORS[index] + ');\
                background-image: -o-linear-gradient(135deg,'+ THUMBNAIL_RAINBOW_COLORS[index] + ');\
                background-image: linear-gradient(135deg,'+ THUMBNAIL_RAINBOW_COLORS[index] + ');';
                $(this).attr('style', style);
                index++;
                if (index == THUMBNAIL_RAINBOW_COLORS.length) {
                    index = 0;
                }
            });
        }

        // widget animation if has
        switch (wp.type) {
            case 'slider':
            case 'carousel':
            case 'ticker':
                var options = new Object();
                options['responsive'] = new Object();
                options['responsive'][0] = new Object();
                options['responsive'][499] = new Object();
                options['responsive'][699] = new Object();
                options['responsive'][899] = new Object();

                var items = (wp.type == 'slider' ? 1 : 2);
                options['loop'] = true;
                options['nav'] = is_enable(wp.buttons);
                options['dots'] = (wp.type == 'ticker' ? false : is_enable(wp.dots));
                options['autoplay'] = true;
                options['autoplayHoverPause'] = true;

                // since 6.9.47
                options['onTranslated'] = function () {

                    setTimeout(function () {
                        optimize_thumbnail($(document).find('#widget-content-' + widget.id + ' .item-thumbnail img'), true);
                    }, 100);
                };


                options['navText'] = [
                    '<a class="' + wp.type + '-button ' + wp.type + '-button-left" href="javascript:void(0)"><i class="gis gi-angle-left"></i></i></a>',
                    '<a class="' + wp.type + '-button ' + wp.type + '-button-right" href="javascript:void(0)"><i class="gis gi-angle-right"></i></i></a>'
                ];


                if (is_rtl()) {
                    options['rtl'] = true;
                }

                if (is_number(wp.columns)) {
                    var columns = Number(wp.columns);
                    if (columns > 1) {
                        items = columns;
                    }
                }

                if (is_number(wp.title)) {
                    widget.find('.item-title').css('font-size', wp.title + 'px');
                }
                // animation type
                if (typeof (SliderAnimateIn) != 'undefined' && SliderAnimateIn != 'inherit') {
                    options['animateIn'] = SliderAnimateIn;
                }
                if (typeof (SliderAnimateOut) != 'undefined' && SliderAnimateOut != 'inherit') {
                    options['animateOut'] = SliderAnimateOut;
                }

                // animation speed
                if (wp.type == 'ticker') {
                    options['slideBy'] = json.entry.length;
                }
                if (is_number(wp.speed)) {
                    options['autoplayTimeout'] = Number(wp.speed);
                    options['autoplaySpeed'] = Math.floor(options['autoplayTimeout'] / 10);
                }

                // init responsive option
                options['items'] = items;
                options['responsive'][899]['items'] = items;
                options['responsive'][699]['items'] = (items > 3 ? 3 : items);
                options['responsive'][499]['items'] = (items > 2 ? 2 : items);
                options['responsive'][0]['items'] = 1;

                if (is_set(widget.owl)) {
                    widget.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                    widget.find('.owl-stage-outer').children().unwrap();
                    widget.owl.destroy();
                }
                var widget_content = $('#widget-content-' + widget.id);

                widget_content.owlCarousel(options);
                widget.owl = widget_content.data('owlCarousel');
                setTimeout(function () {
                    optimize_thumbnail($(document).find('#widget-content-' + widget.id + ' .item-thumbnail img'), true);
                }, 100);
                break;

            default:
                break;
        }
    }


    /*MENU CONTENT*/
    function mega_mega_label_show(json, lister) {
        json = b_valid_json(json);
        if (!json) {
            return;
        }
        json = new b_parse_json(json);

        if (json.total_entry == 0) {
            lister.find('.menu-mega-content').html(trans('Not found any posts'));
            lister.addClass('finished');
            return;
        }

        var html = '';
        for (var i = 0; i < json.entry.length; i++) {
            var e = json.entry[i];
            html += '<div class="item item-' + i + '">';
            html += '<a href="' + e.link + '" class="item-thumbnail"><img src="' + b_resize_image(e.thumbnail, 240) + '"/>' + post_format_icon(e.format) + '</a>';
            html += '<a href="' + e.link + '" class="item-title">' + e.title + '</a>';
            html += DIVCLEAR + '</div>';
        }

        lister.find('.menu-mega-content').html(html);
        lister.addClass('finished');
        optimize_thumbnail(lister.find('.menu-mega-content').find('img'));
    }

    /*ARCHIVE PAGES*/
    /*--------------*/
    // updated-min=2015-01-01T00:00:00-08:00
    // updated-max=2016-01-01T00:00:00-08:00
    // 2015_06_01_archive.html
    function archive_page_json_url(count, page_number) {
        var json_url = tn_url.feed + '/posts/default';
        var start_index = (page_number - 1) * count + 1;
        var next_year = 0;
        var next_month = 0;
        var year = 0;
        var month = 0;

        if (is_label()) {
            // get label slug and append to json url
            var label_slug = get_label_slug(tn_blog.canonicalUrl);
            json_url += '/-/' + label_slug;
        } else if (is_archive()) {
            if (tn_url.current.has('.html')) {
                // month archive page, 
                // must parse month and year to append to url
                var file = get_file_in_url(tn_blog.canonicalUrl);
                year = file.split('_')[0];
                month = file.split('_')[1];
                next_month = Number(month) + 1;
                next_year = Number(year);
            }
            // directly archive page /yyyy/mm/
            else if (!tn_url.current.has('updated-min')) {
                var date_list = tn_url.path.split('/');
                year = 0;
                month = 0;
                for (var i = 0; i < date_list.length; i++) {
                    if (is_number(date_list[i])) {
                        if (year == 0) {
                            year = Number(date_list[i]);
                        } else if (month == 0) {
                            month = Number(date_list[i]);
                        } else {
                            break;
                        }
                    }
                }
                next_year = Number(year);
                if (month == 0) {
                    month = 1;
                    next_month = 1;
                    next_year = Number(year) + 1;
                } else {
                    next_month = Number(month) + 1;
                }
            }

            if (next_year && year) {
                next_year = Number(next_year);
                next_month = Number(next_month);
                year = Number(year);
                month = Number(month);

                if (next_month > 12) {
                    next_month = 1;
                    next_year++;
                }
                if (next_month < 10) {
                    next_month = '0' + next_month;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                tn_query['updated-min'] = year + '-' + month + '-01T00:00:00-08:00';
                tn_query['updated-max'] = next_year + '-' + next_month + '-01T00:00:00-08:00';
            }
        }

        json_url += '?alt=json-in-script&start-index=' + start_index;
        if (is_set(tn_query['updated-min'])) {
            json_url += '&published-min=' + tn_query['updated-min'];
        }
        if (is_set(tn_query['updated-max'])) {
            json_url += '&published-max=' + tn_query['updated-max'];
        }
        if (is_set(tn_query['q']) && tn_query['q'] != '') {
            json_url += '&q=' + tn_query['q'];
            if (is_set(tn_query['orderby'])) {
                json_url += '&orderby=' + tn_query['orderby'];
            } else {
                json_url += '&orderby=relevance';
            }
            json_url += '&max-results=999999';

        } else {
            json_url += '&max-results=' + count
        }
        // console.log(json_url);
        return json_url;
    }
    function archive_pagination_click(widget, page_number) {
        var count = Number($('.widget.archive-page-feed').attr('data-count'));
        $('.widget.archive-page-feed .widget-content').html('<div class="loader">Loading...</div>');
        $.get(archive_page_json_url(count, page_number), function (json) {
            // first load widget
            feed_content_show(widget, json);
        }, "jsonp");
    }
    function archive_pagination_button_show(page_number) {
        var max_page = Number($('.widget.archive-page-feed').attr('data-max_page'));
        var count = Number($('.widget.archive-page-feed').attr('data-count'));
        var total = Number($('.widget.archive-page-feed').attr('data-total'));

        // update information
        var number_listed = count * page_number;
        if (number_listed >= total) {
            number_listed = total;
        }
        $('.archive-page-pagination-info .value').html(number_listed);

        // set active statment
        $('.archive-page-pagination-button.active').removeClass('active');
        $('.archive-page-pagination-button-' + page_number).addClass('active');
        $('.archive-page-pagination-separator').hide();
        $('.archive-page-pagination-button').hide();

        // show pagination number and separator depend of the clicked butt
        $('.archive-page-pagination-button-1').show();
        $('.archive-page-pagination-button-2').show();
        $('.archive-page-pagination-button-3').show();
        $('.archive-page-pagination-button-' + (max_page - 2)).show();
        $('.archive-page-pagination-button-' + (max_page - 1)).show();
        $('.archive-page-pagination-button-' + max_page).show();
        $('.archive-page-pagination-button-' + (page_number - 1)).show();
        $('.archive-page-pagination-button-' + page_number).show();
        $('.archive-page-pagination-button-' + (page_number + 1)).show();

        if (max_page > 6) { // 6 is total button will normal show at beginning
            if (page_number - 2 > 3) {
                $('.archive-page-pagination-separator-3').show();
            }
            if (page_number + 2 < max_page - 2) {
                $('.archive-page-pagination-separator-' + (max_page - 3)).show();
            }
        }
    }
    // count json url, call feed and add pagination
    function archive_page_feed_show(widget) {
        widget.addClass('pending loading');
        if (!is_set(widget.param.count) || isNaN(widget.param.count)) {
            widget.param.count = 4;
        }

        var current_archive_page = 1;
        // show current page if has archive page hash
        if (tn_url.hash.has('#archive-page-')) {
            current_archive_page = Number(tn_url.hash.replace('#archive-page-', ''));
        }

        $.get(archive_page_json_url(widget.param.count, current_archive_page), function (json) {
            widget.removeClass('pending loading');

            // first load widget
            feed_content_show(widget, json);

            // pagination maker
            json = b_valid_json(json);
            if (!json) {
                return;
            }
            json = new b_parse_json(json);

            if (json.entry.length == 0) {
                widget.addClass('no-post').find('.widget-content').html(trans('Not found any post match with your request') + '. <a href="/">' + trans('Back Home') + '</a>');
                return;
            }

            if (is_set(tn_query['q']) && tn_query['q'] != '') {
                return;
            }

            var max_page = Math.ceil(json.total_entry / widget.param.count);

            if (max_page > 1) {
                widget.attr('data-max_page', max_page);
                widget.attr('data-count', widget.param.count);
                widget.attr('data-total', json.total_entry);

                var ret = '';
                for (var i = 1; i <= max_page; i++) {
                    ret += '<a href="#archive-page-' + i + '" class="shad archive-page-pagination-button archive-page-pagination-button-' + i + '">' + i + '</a>';
                    if (i == 3 || i == max_page - 3) {
                        ret += '<span class="archive-page-pagination-separator archive-page-pagination-separator-' + i + '">...</span>';
                    }
                }

                var page_info = '<span class="archive-page-pagination-info"><span class="value">' + json.entry.length + '</span> / ' + json.total_entry + ' ' + trans('POSTS') + '</span>';


                ret += page_info;
                $('.archive-page-pagination').html(ret + DIVCLEAR);
                archive_pagination_button_show(current_archive_page);


                // when click pagination
                $('.archive-page-pagination-button').click(function () {
                    if ($(this).is('.active')) {
                        return true;
                    }
                    if (ARCHIVE_RELOAD_FOR_CONTENT) {
                        $("html, body").animate({ scrollTop: 0 }, 10);
                        $("body").animate({ opacity: .5 }, 100);
                        setTimeout(function () {
                            location.reload();
                        }, 100);
                        return true;
                    }

                    var page_number = Number($(this).html());
                    archive_pagination_click(widget, page_number);
                    archive_pagination_button_show(page_number);
                    scroll_to('.archive-page-pagination-top', 100);

                    if ($('.archive-page-header').length) {
                        scroll_to('.archive-page-header', 100);
                    } else if ($('.archive-page-pagination-top').length) {
                        scroll_to('.archive-page-pagination-top', 100);
                    } else {
                        scroll_to('#content-section-2', 100);
                    }
                });
            }
        }, "jsonp");
    }
    function archive_page_show(widget) {
        if (!is_index() || is_home()) {
            widget.remove();
            return;
        }
        widget.addClass('archive-page-feed feed');

        // Show archive page title
        var ret = '<div class="clear"></div><div class="archive-page-header"><h2>';
        if (is_label()) {
            ret += '<span>' + trans('LABEL') + ': </span>';
            if (ARCHIVE_PAGE_FEED_LINKS) {
                ret += '<a target="_blank" href="' + tn_url.feed + '/posts/default/-/' + get_label_slug(tn_blog.canonicalUrl) + '">';
            }
            ret += '<strong>' + get_label_name(tn_blog.canonicalUrl) + '</strong>';
            if (ARCHIVE_PAGE_FEED_LINKS) {
                ret += ' <i class="gis gi-rss-square"></i>';
                +'</a>';
            }
        } else if (is_archive()) {
            if (tn_url.current.has('.html')) {
                var file = get_file_in_url(tn_blog.canonicalUrl);
                var year = file.split('_')[0];
                var month = file.split('_')[1];
                ret += '<span>' + trans('ARCHIVE') + ': </span><strong>' + year + '-' + month + '</strong>';
            } else if (tn_url.path.has('/')) {
                var date_list = tn_url.path.split('/');
                var year = 0;
                var month = 0;
                for (var i = 0; i < date_list.length; i++) {
                    if (is_number(date_list[i])) {
                        if (year == 0) {
                            year = Number(date_list[i]);
                        } else if (month == 0) {
                            month = Number(date_list[i]);
                        } else {
                            break;
                        }
                    }
                }

                if (year) {
                    ret += '<span>' + trans('ARCHIVE') + ': </span><strong>' + year;
                    if (month) {
                        month = Number(month);
                        if (month < 10) {
                            month = '0' + month;
                        }
                        ret += '-' + month;
                    }
                    ret += '</strong>';
                }
            } else {
                var year = tn_url.current.split('updated-min=')[1];
                year = year.split('-')[0];
                ret += '<span>' + trans('ARCHIVE') + ': </span><strong>' + year + '</strong>';
            }
        } else if (is_search()) {
            if (tn_query['q'] != '') {
                ret += '<span>' + trans('SEARCH') + ': </span><strong>' + decodeURIComponent(tn_query['q']).replaceAll('+', ' ') + '</strong>';
            } else {
                ret += '<strong>' + trans('ALL POSTS') + '</strong>';
            }

        }
        ret += '</h2>'
            + DIVCLEAR
            + '</div>'/*end header*/
            + '<div class="archive-page-pagination archive-page-pagination-top">'
            + '</div>'
            + DIVCLEAR + '<div class="archive-page-content widget-content" id="widget-content-' + widget.id + '">'
            + '<div class="loader"></div>'
            + '</div>'
            + DIVCLEAR + '<div class="archive-page-pagination archive-page-pagination-bottom">'
            + '</div>';
        widget.html(ret).show()
        archive_page_feed_show(widget);
    }


    /*custom action*/
    // widget adjust class and content
    $('.widget').each(function () {
        if ($(this).children('h2').length == 0 || is_empty($(this).children('h2').html())) {
            $(this).children('h2').remove();
            if ($(this).find('h2.widget-title').length == 0) {
                $(this).addClass('no-title');
            }
        }
        if ($(this).find('#mc_embed_signup').length && !$(this).find('link').length) {
            $(this).addClass('FollowByEmail');
            // $(this).find('link').remove();
            $(this).find('#mc_embed_signup').each(function () {
                $(this).addClass('follow-by-email-inner');
                var form = $(this).find('form');
                form.prepend('<table width="100%" cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table>');
                form.find('input[type="email"]').addClass('follow-by-email-address').appendTo(form.find('tr'));
                form.find('input[type="submit"]').addClass('follow-by-email-submit').appendTo(form.find('tr'));
                form.find('div').remove();
                form.find('input').wrap('<td></td>');
                var placeholder = form.find('input[type="email"]').attr('placeholder');
                if (is_empty(placeholder)) {
                    form.find('input[type="email"]').attr('placeholder', 'Email Address ...');
                }
            });
        }
    });

    /*MENU MASTER*/
    /*************/
    if (CENTERING_MENU_ITEMS) {
        $('.widget.main-menu').addClass('main-menu-center');
    }

    // fill data for mega label menu
    $('.menu .menu-item-mega-label').hover(function () {
        // load feed if this is not load
        if (!$(this).is('.loaded')) {
            var lister = $(this);
            lister.addClass('loaded');
            $.get(tn_url.feed + '/posts/default/-/' + $(this).attr('data-slug') + '?alt=json-in-script&max-results=4', function (json) {
                mega_mega_label_show(json, lister);
            }, "jsonp");
        }
    });

    // animation to show / hide menu
    $('#main-menu-toggle').click(function () {
        if ($(this).is('.active')) {
            $(this).removeClass('active');
            $('#header .main-menu').stop().slideUp(300);
        } else {
            $(this).addClass('active');
            $('#header .main-menu').stop().slideDown(300);
        }
    });

    // #header.sticky.mobile-menu-opened
    function mobile_menu_active() {
        $('#main-menu-toggle-mobile').addClass('active');
        $('#header .mobile-menu .menu').stop().slideDown(300);
        $('#header').addClass('mobile-menu-opened');

        if ($('#header').is('.sticky')) {
            $('#header').css('height', $(window).height() + 'px');
            $('.mobile-menu').css('padding-bottom', $(window).height() + 'px');
        }
    }
    function mobile_menu_deactive() {
        $('#main-menu-toggle-mobile').removeClass('active');
        $('#header .mobile-menu .menu').stop().hide();
        $('#header').removeClass('mobile-menu-opened');
        $('#header').css('height', '');
        $('.mobile-menu').css('padding-bottom', '');
    }
    $('#main-menu-toggle-mobile').click(function () {
        if ($(this).is('.active')) {
            mobile_menu_deactive();
        } else {
            mobile_menu_active();
        }
    });

    // animation to toggle light/dark mode
    $(document).on('change', '.header-mode-toggle-checkbox', function () {
        if ($(this).is(':checked')) {
            $('body').attr('data-mode', 'dark')
            update_option('theme-mode', 'dark')
        } else {
            $('body').attr('data-mode', 'light')
            update_option('theme-mode', 'light')
        }
    });

    // animation to show hide search
    $('#search-toggle').click(function () {
        if ($(this).is('.active')) {
            $(this).removeClass('active');
            $('.search-form-wrapper').stop().fadeOut(100);
        } else {
            $(this).addClass('active');
            $('.search-form-wrapper').stop().fadeIn(100, function () {
                $('.search-text').focus();
            });
        }
    });
    $('.search-form-overlay, .search-form-label').click(function () {
        $('#search-toggle').removeClass('active');
        $('.search-form-wrapper').stop().fadeOut(100);
    });
    $('form.search-form').on('submit', function () {
        var search_query = $(this).find('.search-text').val();
        if (is_empty(search_query)) {
            $('#search-toggle').removeClass('active');
            $('.search-form-wrapper').stop().fadeOut(100);
            return false;
        }

        return true;
    });

    // widget label list actions
    $('.feed-widget-labels a').click(function () {
        var parent = $(this).parents('.feed-widget-labels');
        if (parent.is('.listing')) {
            if ($(this).is('.active')) {
                parent.find('a').each(function () {
                    if (!$(this).is('.active')) {
                        $(this).stop().slideUp(100, function () {
                            parent.removeClass('listing');
                        });
                    }
                });
                return; // selected before, not need reload
            }

            parent.find('a').removeClass('active');
            $(this).addClass('active');
            parent.find('a').each(function () {
                if (!$(this).is('.active')) {
                    $(this).stop().slideUp(100, function () {
                        parent.removeClass('listing');
                    });
                }
            });
            widget = tn_widget[Number($(this).parents('.feed.widget').attr('data-i'))];
            index = Number($(this).attr('data-i'));
            widget.addClass('pending');
            feed_get(widget, index);
            widget.find('.feed-widget-viewall a').attr('href', set_label_url(widget.content[index].slug));
        } else {
            parent.addClass('listing');
            parent.find('a').stop().slideDown(100);
        }
    });



    // copyright year
    $('.copyright-year').html(function () {
        var curDate = new Date();
        return curDate.getFullYear();
    });

    /*global system effects*/
    $(window).scroll(function () {

        // show pending widgets when they come to view port
        $('.widget.feed.pending').each(function () {
            feed_get(tn_widget[Number($(this).attr('data-i'))]);
        });
    });
    $('.scroll-up').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // key stroke
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('#search-toggle').removeClass('active');
            $('.search-form-wrapper').stop().fadeOut(100);
        }
    });

    /*PRESTYLE*/
    var wrapper_background = $('.wrapper').css('background-color');
    if (wrapper_background == 'rgb(255, 255, 255)' ||
        wrapper_background == '#ffffff' ||
        wrapper_background == '#FFFFFF') {
        $('body').addClass('solid-white');
    }

    /*STICKY SIDEBAR*/
    if (STICKY_SIDEBAR && ($('#main-sidebar').css('float') != 'none') && typeof (IE) == 'undefined') {

        /* sticky sidebar */
        var sneeit_prev_win_top = 0;
        var init_sidebar_left = 0;

        function sneeit_sticky_sidebar_disable() {
            $('#sidebar')
                .removeClass('fix-top fix-bot abs-stay abs-bot')
                .removeAttr('style');
        }

        function sneeit_sticky_sidebar_start() {
            sneeit_sticky_sidebar();
            $(window).scroll(function () {
                sneeit_sticky_sidebar();
            });
            $(window).resize(function () {
                sneeit_sticky_sidebar_disable();
            });
        }

        function sneeit_sticky_sidebar() {
            if ($('#main-sidebar').css('float') == 'none' || $('#sidebar').length == 0) {
                sneeit_sticky_sidebar_disable();
                return;
            }

            /* window information */
            var win = $(window);
            var win_height = win.height();
            var win_top = win.scrollTop();
            var win_bot = win_height + win_top;


            /* content information */
            var content = $('#content');
            var content_height = content.height();
            var content_top = content.offset().top;
            var content_bot = content_height + content_top;

            /* sidebar information */
            var sidebar = $('#sidebar');
            var sidebar_height = sidebar.height();
            var sidebar_top = sidebar.offset().top;
            var sidebar_bot = sidebar_top + sidebar_height;


            if (sidebar.css('position') == 'static' || init_sidebar_left == 0) {
                init_sidebar_left = sidebar.offset().left;
            }

            /* set left and width for the sidebar */
            sidebar.css('left', (init_sidebar_left) + 'px');


            sidebar.css('width', $('#main-sidebar').width() + 'px');


            /* not need sticky if content is too short
             * or the scroll is on the top of page 
             * or in responsive width
             * */
            if (sidebar_height >= content_height || win_top <= content_top) {
                sneeit_sticky_sidebar_disable();
                sneeit_prev_win_top = win_top;
                return;
            }

            /* if too short sidebar, just stick on top */
            if (sidebar_height < win_height) {
                if (sidebar_bot >= content_bot) {
                    sidebar
                        .removeClass('fix-top fix-bot abs-stay abs-bot')
                        .addClass('abs-bot');
                    sneeit_prev_win_top = win_top;
                    return;
                }

                sidebar
                    .removeClass('fix-top fix-bot abs-stay abs-bot')
                    .addClass('fix-top');
                sneeit_prev_win_top = win_top;
                return;
            }

            /* when scrolled of the bottom, just stick there instead of floating */
            if (win_bot >= content_bot) {
                sidebar
                    .removeClass('fix-top fix-bot abs-stay abs-bot')
                    .addClass('abs-bot');
                sneeit_prev_win_top = win_top;
                return;
            }


            /* scroll down */
            if (sneeit_prev_win_top < win_top) {
                /* if scrolled over the bot of sidebar */
                if (win_bot >= sidebar_bot) {
                    sidebar
                        .removeClass('fix-top fix-bot abs-stay abs-bot')
                        .addClass('fix-bot');
                }
                /* if still in sidebar body */
                else {
                    sidebar
                        .removeClass('fix-top fix-bot abs-stay abs-bot')
                        .css('top', (sidebar_top - content_top) + 'px')
                        .addClass('abs-stay');
                }
            }

            /* scroll up */
            else {

                /* if scrolled over the bot of sidebar */
                if (win_top <= sidebar_top) {
                    sidebar
                        .removeClass('fix-top fix-bot abs-stay abs-bot')
                        .addClass('fix-top');
                }
                /* if still in sidebar body */
                else {
                    sidebar
                        .removeClass('fix-top fix-bot abs-stay abs-bot')
                        .css('top', (sidebar_top - content_top) + 'px')
                        .addClass('abs-stay');
                }
            }

            sneeit_prev_win_top = win_top;
        }

        sneeit_sticky_sidebar_start();

        $(window).resize(function () {
            $('#sidebar').css('width', $('#main-sidebar').width() + 'px');
        });
    }

    /*STICKY MENU*/
    var Last_Window_Scroll_Top = 0;
    function sticky_menu_enable() {
        var header_width = $('#header').width();
        var menu_height = $('.main-menu').height();
        $('.main-menu').addClass('sticky-menu');
        $('.main-menu').find('ul.menu').css('width', header_width + 'px').css('height', menu_height + 'px');
        if ($('.main-menu-placeholder').length == 0) {
            $('<div class="main-menu-placeholder" style="height:' + menu_height + 'px"></div>').insertAfter($('.main-menu'));
        }
    }
    function sticky_menu_disable() {
        $('.main-menu').removeClass('sticky-menu');
        $('.main-menu').find('ul.menu').css('width', '');
        $('.main-menu-placeholder').remove();
    }
    if (STICKY_MENU != 'disable' && typeof (IE) == 'undefined') {
        $(window).scroll(function () {
            // we don't need to sticky this when in responsive (mobile screen)
            if ($('.main-menu').css('display') == 'none' || $('#main-sidebar').css('float') == 'both' || $('#main-sidebar').css('float') == 'none') {
                sticky_menu_disable();
                return;
            }

            var content_top = $('#header-wide').offset().top;
            var window_top = $(window).scrollTop();
            if (window_top > content_top) {
                switch (STICKY_MENU) {
                    case 'up':
                        if (window_top < Last_Window_Scroll_Top) {
                            sticky_menu_enable();
                        } else {
                            sticky_menu_disable();
                        }
                        break;

                    case 'down':
                        if (window_top > Last_Window_Scroll_Top) {
                            sticky_menu_enable();
                        } else {
                            sticky_menu_disable();
                        }
                        break;

                    default: /*Always*/
                        sticky_menu_enable();
                        break;
                }
            } else {
                sticky_menu_disable();
            }
            Last_Window_Scroll_Top = window_top;
        });
    }

    /* STICKY MOBILE MENU */
    function sticky_mobile_menu_enable() {
        var header_height = $('#header').height();
        $('#header').addClass('sticky')
        $('#header .blog-title').css('width', $(window).width() + 'px');

        if ($('.mobile-menu-placeholder').length == 0) {
            $('<div class="mobile-menu-placeholder" style="height:' + header_height + 'px"></div>').insertAfter($('#header'));
        }
    }
    function sticky_mobile_menu_disable() {
        $('#header').removeClass('sticky')
        $('#header .blog-title').css('width', '');
        $('.mobile-menu-placeholder').remove();
    }
    var Sticky_Mob_Menu_Enabling = false; /* stop sneak scroll caused by show / hide elements */
    if (STICKY_MOBILE_MENU != 'disable' && typeof (IE) == 'undefined') {
        if ($('.top-page-wrapper').is('.auto-height')) {
            $('#header').addClass('auto-height');
        }

        $(window).scroll(function () {

            if (Sticky_Mob_Menu_Enabling) {
                Sticky_Mob_Menu_Enabling = false;
                return;
            }

            // we don't need to sticky this when in NOT responsive (DESKTOP screens)
            if ($('.mobile-menu').css('display') == 'none' || $('#main-sidebar').css('float') != 'both' && $('#main-sidebar').css('float') != 'none') {
                mobile_menu_deactive();
                sticky_mobile_menu_disable();
                return;
            }

            var content_top = $('#header-wide').offset().top;
            var window_top = $(window).scrollTop();
            if (window_top > content_top) {
                switch (STICKY_MOBILE_MENU) {
                    case 'up':
                        if (window_top < Last_Window_Scroll_Top) {
                            sticky_mobile_menu_enable();
                        } else {
                            mobile_menu_deactive();
                            sticky_mobile_menu_disable();
                        }
                        break;

                    case 'down':
                        if (window_top > Last_Window_Scroll_Top) {
                            sticky_mobile_menu_enable();
                        } else {
                            mobile_menu_deactive();
                            sticky_mobile_menu_disable();
                        }
                        break;

                    default: /*Always*/
                        sticky_mobile_menu_enable();
                        break;
                }
            } else {
                sticky_mobile_menu_disable();
            }
            Last_Window_Scroll_Top = $(window).scrollTop();

            if (Last_Window_Scroll_Top != window_top) {
                Sticky_Mob_Menu_Enabling = true;
            }
        });
    }


    /*RANDOM POST LINK*/
    function go_backup_random_post() {
        var backup_rand_list = new Array();
        $('a[href*=".html"').each(function () {
            var href = $(this).attr('href');
            if (!(href.has('_archive.html') || href.has('/p/')) && href.has(tn_url.host)) {
                backup_rand_list.push(href);
            }
        });
        if (backup_rand_list.length == 0) {
            window.location.href = tn_url.host;
        } else {
            window.location.href = backup_rand_list[randInt(0, backup_rand_list.length - 1)];
        }
    }
    $(document).on('click', 'a[href*="#random-post"]', function (e) {
        e.preventDefault();

        $('body').html('<div class="loader"></div>');

        $.get(tn_url.feed + '/posts/default?alt=json-in-script&max-results=0', function (json) {
            json = b_valid_json(json);
            if (!json) {
                go_backup_random_post();
                return;
            }
            json = new b_parse_json(json);
            if (json.total_entry == 0) {
                go_backup_random_post();
                return;
            }
            $.get(tn_url.feed + '/posts/default?alt=json-in-script&max-results=1&start-index=' + randInt(1, json.total_entry), function (json) {
                json = b_valid_json(json);
                if (!json) {
                    go_backup_random_post();
                    return;
                }
                json = new b_parse_json(json);
                if (json.entry.length == 0) {
                    go_backup_random_post();
                } else {
                    window.location.href = json.entry[0].link;
                }
            }, "jsonp");
        }, "jsonp")
    });


    /* 
        show main element when everything loaded 
        use this method to pervent CLS (cummulative layout shift)
    */
    if ($('.main-loader').length) {

        $(document).ready(function () {
            var heartbeat = setInterval(function () {

                if ($('.feed.pending.loading').length ||
                    $('img.loading').length) {
                    return;
                }
                clearInterval(heartbeat);
                heartbeat = null;

                $('.main-loader').remove();
                $('.wrapper').animate({ 'opacity': 1 }, 100);
            }
                , 10);
        });

    } else {
        $('.wrapper').css('opacity', 1);
    }

    /**
    Even the document.ready
    You should place it after all function and definitions
    Because in case user using BACK function in browser
    the document will be ready immediately
    **/

    $(document).ready(function () {
        if (!_0x5e4196()) {
            var copyright_content = '<div style="text-align: center;padding: 20px 0 0 0;font-size: 12px!important;text-indent: 0!important;opacity: 1!important;visibility: visible!important;display: block!important;position: static!important;">Designed by <a href="https://sneeit.com" style="font-size: 12px!important;text-indent: 0!important;opacity: 1!important;visibility: visible!important;display: inline-block!important;position: static!important;">Sneeit.Com</a></div>';
            $('.wrapper').append(copyright_content);

            setTimeout(function () {

                if (!$('.wrapper').find('>div').last().find('>a').length) {
                    $('.wrapper').append(copyright_content);
                }
            }, 1000);
        }
    });


    /* OBFUSCATE END HERE */

} /* end of main_js */