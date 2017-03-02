import React, {Component} from 'react';

import {
    Button,
    Easing,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    AppRegistry
} from 'react-native';

import FlipView from 'react-native-flip-view'

import {SkaterCard} from './components/skatercard';
import {BoardSkaterCard} from './components/boardskatercard';
import {CardBack} from './components/cardback';
import {MoveCard} from './components/movecard';
import {JukeBox} from './components/jukebox';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.refresh = this.refresh.bind(this);
        this.state = { isFlipped: false };
    }

    componentWillMount() {
        this.refresh();
    }

    refresh() {
        if (this.props.loadSkaterCards) {
            this.props.loadSkaterCards();
        }

        if (this.props.waitForMoves) {
            this.props.waitForMoves();
        }
    }

    selectSkaterCard(skater) {
        this.props.setTurnInProgress(true);
        this.props.selectSkaterCard(skater);
        this._flip()
    }

    nextTurn() {
        this.props.setTurnInProgress(false);
        this.props.resetSelectedSkaterCard();
        this.props.resetOpponentSkaterCard();
        this.props.waitForMoves();
        this._flip()
    }

    _renderFront = () => {
        return (
            <CardBack image="data:image/jpeg;base64,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"/>
        );
    };

    _renderBack = () => {
        return (
            <View>
                {this.props.selectedSkaterCard.name ?
                    <BoardSkaterCard key={'s:' + this.props.selectedSkaterCard.id}
                                     skater={this.props.selectedSkaterCard}/>
                    :
                    <Text>Loading...</Text>
                }
            </View>
        );
    };

    _renderFront2 = () => {
        return (
                <CardBack image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXFxgaGBgYGBgeGRcYHR8aGhoaGhoYICggGBolGxgYITEhJSkrLi4vFyAzODMtNygtLisBCgoKDg0OGhAQGi0mHyUvLi0tLS4tNzUuLS0tLS0vLy0tLTctLS0tLS0tLS0vLS0tLS0tLS0tLS0uLS0tLS0tLf/AABEIAQIAwwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABgQFBwMCAQj/xABNEAACAQICBgYFCAcGBAYDAAABAgMAEQQhBQYSMUFREyJhcYGRBzKhscEUI0JSYnLR8DOCkqKywuEkQ3N1s9IlY4OTNERTo8PxFhcm/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EADIRAAIBAgUBBQYGAwAAAAAAAAABAgMRBBIhMUFRBWFxgZETIkKx4fAUMjOhwdEVI/H/2gAMAwEAAhEDEQA/ANxooooAooooAooooAooooAooooAor4zAZk2FckxcZNg6E8gwv5UB2orhjsbHCjSSusaLmzOwVR3k5UpYr0q6JT/AM2G+4kje1VtQDpRWeS+mbRQ3SSt3RPn52qNF6a8Ad6yjv2fxqG7GkKUp7W9UvmzTKKR9H+lbRsjBTN0Vwc5CoXLPMgm3jTPo7T2Fn/Q4iGT7kik+QN6J3InCUHaRY0UUVJQKKKKAKKKKAKKKKAKKKKAKKKKAKKqNZNNxYaImSQoxB2QoBe/NVOXnlWTrp7Fygs3TlL5MblSPDK/O1Rc66GEdSOZuy7zaZsVGnrOq97Ae+q+bWPDL/eg/dBPtAtWRJpE8CDXQaSbkKi53R7LXLuaTPrlEPUjdu+wHxqq0jrVNIjIlotoEbS5ut+Kk5X7waTRpP7NexpQfVNLs1WAhH4Su0ro0ObzaRxDH/myo1vAiwqnlw0KbtIx/rxwOPIi1WWN0RgpfXht90ke412wWiMBHbZgS44su0fNr0KPCa/pr1+hWYzEtioVwzY6CeNDtInRW2G5joSLHM+Z51Cj1Om+iYvKQH969Oy4iPcpCjlbLyrhPGWyXEbPcFqC34OnbWOvmKEmrmKXgh/XA961yTRWIP8Aco3c0bfhTBiNVll9fGTt3NGo9i100fqfh4iGUysRzka3ktr0MvwsG/yv1X1+YqzaHl+lhPJB/K1QZtBcegkQ87P/ALT761i1eDMgNtoX5XzpqHgKb2uZ3ofTmkMIwMOMlVR9CTpWS3Iq6lfKth0V6VsIYFOIbYmt11RWK3HFSbZHfY7t3bVGZR31ykYH6K+QNTco+zk9mMH/AO28IfVjlPig/mNWeh/SNg8Q6xjpUZja7L1b9rKSAO02pEfDoc+jU2+yPwr6N1hl3UuRHs5NtOX7G1UUUVY8sKKKKAKKKKAKr9JYwoQoNsrn4fGp5NK+lcVmWGZY2Uc+AqsmSiq0po2HES9ZdpxZnYk7uCmxtY2ta269TH0aGFjkBkLcvHhXfB4TZW28k3Y8zxPwHYBU47rVU0lOTSTYvNoSLdsKf1fjUXE6pRkXAZe43Htz9lNUSW4XrnPGxNr27BUkwqTg/dbQjTaqMN0g8Qb1Ek1cmG6xrQkw7LuHnxrwcGxzuPACpOiOOrr4jMJcFIu9T5VGbaH9257lrVZMMOIHtrk8Edr/AIUL/wCRr9V6GUviGH91J4gD3mhcQx9WNj2AH4CtPj0eHzCDZ7Rv8qkR6KUcAB2ChH+RrvlehlSQ4xyNjDgD6zsVA8LXPgK4aR+VROEvHtbyAG6o7STWtY2FV2VUAEnfYZAbz7q4DVTDSKbowdiSX2m2rnidokGhNPGVHJe0k7d1jOMHhJZBeSQ27OqPZma5TYGNJomUdbbGYHnc8a0gapbN7naUZKBlYcyOJpL1h0GsM6TCUKCdkqzduVgTvvQ6amPp5kktDrM9gSAzZjlfP4CvCsxvkAFax7RYWtyzIoSXaBtv3EcuddIlJJF/WYfgB7qg64XsrO66lTj9L9FiosO8dhIt1e/HgLcrce2rjDLd0HNlHtFR/S7o8JisC6j+8CjusP8AbU3Ra3nhHOWP+IVJzYetKrTm+b/wbFRRRVjwwooooAooooCHpOSy7P1svDj+HjVHFFtPtkbrhfifh513xukQ+LfDAZxwxPe//qNKLW4WEQP63ZUyGHcBuqj3LLYUdcNd8Po5o0kR3dxtWTZ6q3sC20RvN7DsNeMH6QsA7bLyNh5Ba6To0ZXjmT1Rkb7+NZ7pppMTidKyhdvEL8xHGd6QlmjkZQd5CIBlu6VjxFUmE0dLLGuEYs+KxOIVlRmY9CgFnnkF/WYZdb6Kk7zU2LWSP0PDihIgeJlZGF1dSCpHMEZEV7w8YGZzNVeEwq4XDxwxEIkShQXzBtvJzGZOd78ag/8A5OFlWJ+jO0QFZWILE7tmNl2m7xcdtCthixOItkBc1wGLsM71T4fWbDPKYxNGZLkBLm5YbwMrE5c6sZsYL2COx4hQDbvJIF+yhNmc3ZnOSkD212iwdz1vKu6YkbJYq6gZZrn7KqtNaf6FVEUZllkbYjjFxdt92NuqAM/ySASL42AqOMz2UuTYPSUnr4mGAcoo9sj9aTjV/ITFCTcsVXed7NuF+0tYeNBwRETblZuAOyPA9b9647gKtlAVSxNgASSeAG81FwGH2VA32AF+fbXzS7oQIXG0r2DDPNTkb24Hd51DJMZ1j1yxmKmdIpHSMk7Mcdw2zwJ2esTzvzr7oXUjGTXZ4gi2uXmsuXG6m7buY8a3PDaNijAWONY15KAB7K+aRjHRuLZWt4HfVcvUm4i6d1YZY0nhO0dhNvIjbIABaxzF99UUMpBBtYg7jzFaZgNJo8smHaRXkjJvYWuuXhcbWybcRuF6p9YdWNu7w2D23cCRVjqw+IlReWW33qhb9Ic6TYjDkEFYVMrHldTs+wk1x1ecNioQOEsd/MN7qr8TGzI6W2X2WUqeBsR5dtWuq2Hti4+N5FIz3WUDPnuPmKk7qcFSoPLrz9+BrlFFFWPCCiiigCiiigFDA4Nvl2MxDbnaKOMfYjQbR8ZGkH6p51eohO/ypb0Hp0yS4xHACw4l0Dc1uTnyIJIvyt3liTFKwupBHYcqzRbgWdYNQcHi5emdXSQ73jcqW4XPC9sr76naA1SwmCVvk8QVm9Z2JZ245s2duwZVdxVw0nihHE8h+gjN5AmpJ3djNdcNNxxYorEGLLlI+0TY/VjDXCkcxuPdSzhGkSRcYICI0uCzMLvfaVuu1jJJZjuuchyr7iooiu20jPK2ZAWwBJudpjvO/cPGokk7EKGYsFFlBJIVeQvuHYKpmZ1KlJvLHktMXgJMNGJlw8qBgVSWRVBAcH1tliS+ySAWA38afcPrAmGjjSUoshiVtlma4JUZMQpt40pYLXmVY+inRMRFkLPk1hu6wyNrcQTlvpdxOIaaRpXN2diT4/DhV8zkzp7N7O/E1Mj0S1Y7w64TShyZoUIayrfYUr9bacXNzlbLdXfV/WBPlHz+UklwCsnSL1AbHLJLgtkOWdZ1ItzUjCK+0nRmz7QCkcybfGlz0q/Y8MtSUNFFad+n3wbnhiH6w3VB09iQHgi4ySX/AFUG0f3ilW2HiCiwyFIunNIh9LQxqb9Etj2M/WP7oSpPm+R32gouxCgC5JNgBxJJ3ClvTOLUYgMG2ldEK2IzVS1yPMedLXpi0m+zBg47kyHbZRvaxtGtuRcN4qtXeitFSYiGIpsL0XzYZ1a7psxBtkixI6QS57uXOqPXQPYv8ZrII9hyloy1ixJvYFVZgADkGcDMgm2QNeNesU6YOYobE7Ck55KzAE5dht41Pwui4oxfZBYG+21i1+JHBSb/AEQKXdatesHhtqNj0zkWMaWbwcnqr3HPsNWZelJRnGTV7Pbr3ED0f6DmSQ4qUWDp1M7ltuzFjyyHHO5NMmm9YsNhV2sROib7Le7H7qjrHwFZHpb0h47EEJD8wpyVYxeQ9gYi/wCyq1y0V6PcXiD0kwMYbMvLcu3bs32ifvEVW/Q1xFaVeeeRK1r9Isc7BcNh7ENlK+TEX3bK8D2nwvTNqFpmF8bEmTs6yW2bEIQu1c8sgw8a64DUTDYSNptkvIqOwdzciwJ6qjqr32v20r+hzCD5fGR9GOQny2fjUkQryjTlBbM3uiiitDkCiiigCiiigMw1XW7aTPPH4geRH41b6sL85MvZGbf9z8BVbqsmWkTz0ji/4lHwq81ei+clbiVjHl0n41kjTgtYiRSxrzipTC0KKFElgZGYAb7lVX1mYgbrUwNpKBNramjGyLm7rcAb8r3pE1r0/Biwkag9ECZHZ1K7QXJQgOZvtGpZpRg5TWhXYHRiRgFlLnmw9ynd40t6XlXppAoAF7W7gAfbenOBiUXZuoIFlta3ZYZbqWdE/KmdikaSWPzjPArqlzmzWW44nLPI1MloetjWoU4qKS8PvvIq4aQwX6N9gNtF9htgC1h1rW3muCuLWqbpnSTEhQ8cy8tiZUX7KK0mS9wAqtbGt/6MI7QrX8y1VbbOfs6tPDOUobPe97a+Gx2iQk2HWPAAXPspn9HeFjkxV3OcY2lW29hl+7vt+FL+EM5Q9GI43JuoO2HYc4yxse4U+6iKmJQTMB06dV243tkwPC4+NSjqxnaU5UFRWi63bv5sbtOaUXDwSTNcrGjMQN5sL2HfWO+juWTE4uTEyZs0jO3IE8B2C9h3Vo3pDUJo7EdqgftMo+NKnoZwo+TyPbPpD7hVjw0cdNYtG08hlIEeHVSxNzYLGZQbAXydqvNNeluBOrhomlYZbTdVfix8hSas+3pbGOLX+eVbi4FiIwbXzypv0Z6LYQ21iJS5JJKRjYXPmfWPhs91Z68E6CPpXW3H41tguwDbooQRfwXrN4m1MOq/ozZht4zaiXLZjUjbP3iL7I7BnztWj6O0ZDh0tDEkY+yBc953k9pqc77vD41ZR6i/QhaI0FhsLYQQoht61rse9j1j51ILXPcDXHS2lYoBtyuEFjvOZ7hvNZNrDrvNiSYcPdVbLLIkfab4D20bSCTYya7a4p/4WEq7MCshGeyDkQO2178qs/RbhlV5NlQvUG4W4/0rMdX8Ouyz722rX7M93LcfzYHV/Rkv6U/Zj9pb8KmPU74QSwk5d/8AQ90UUVc8sKKKKAKKKKAzrVX1cf8A5hi/4xUPWKWRYJdhiqloBIVNjsEyA58AW2Qe+p2qY6uO/wAwxn+pVjgcOknTxuLoyKrDsO3+NZI2hLK02ZhiMMi2CxZCxLZZAG57TkCKuMagMZOQ2OsuW4rn5ZW8ahHDnrQuxBRyj8yFJHgGABvyNSdFaObEEojEjZZokNgH2CvVJGeyQWtfd1asfSVJwhBzS91peX3cl4GU7JLyK187iwsOPHxpq1JwrbMkga0TyMVUKBtEhLyFt5zBAtllxpTwsaBhKIkfIh0dV63ArY+q4sc+eR35P2iJ4lgDxm0OzcAnJAN4z9UDMbPC1sqseb2hVmkoW0673Mt1zwKrinMakJIdpMsib7LbPMbYNu+qXG4Xo3KEgkAXtwNsxfmN3hWxae0LFjIUMThWTOGRNw7Mvo5DdutWaQaFMTiTFjYiWUKwPrSEHrBBvcDeSMrXtc5VWVr6HnUpPJaW5p+mRh2VMPOlkkFkYgbKsBkob6D23c7W7KWtQcK2HxmKw7cFHjY9U+Ie/jTU+Phki2y0bRHPaNiuWfHIEHxyqs1WHTT4jGWskmzHHcZsqZF/EgeVTyU2RG9LMltHSDm8Y/fDfy1U+hlf7Gf8VvctS/TFLbBAc5VH7rn4VE9EvV0ex/5kh8gPwqOWQhC0DiL4jFScSsjebrW9TYlVJJIAF7k7q/OegQW6YA2JiFv+7FyG7PPuqfjIsbLdpnfmdtyfj+bVROxZK7NY03r5hIVsH6VhwTMeLHKkHTvpKxE1xCvRLzXM+LcPCqLG6C6MKXYkk5jkBmcuB35HPI5ZGrXS+BjWLqgAFgOPNfHcOw3P0RuXbL2RUPhJpTtTSMS3MknnmT2Z1a6DwqgCw3oR2kg2J8QQeXafVqdKxMasN4UN48eG/fwGZ+kczH0RJdwLZLcZduxzvxU5EE/ZO6mzHBw0ZkXG+5B33+t+fx4ap6M16kp/w/c341lOit7HsHvPnxzz799a56Nl+akP2lH7v9avHY9GatgPF/yOFFFFXPGCiiigCiiigM81TOWOHLSGL/jB+NWuhV+cmPYnn1qp9U9+kf8AMcV/8dXGh/0kx7I/56yRfgpdbdVlkWbELI0ZETsygDZkZFOzcn1dwB5gDleqfVnEhJsO1xa9rnIWZGAv+tamnWBUkaOCU2hs801zYFU2Qqk8F2nufuCl/FavgsskKLNhHdDsgm6rtDayNrx7yLZju3WR24eulTnTm91p/RN1i0XJGTiTskOR0oQEBDkA4O8g7icuB51d6nZ4Rb8Xm/1Htbwt51KwujkjUopboyCCjMWW24jr3IFuF7V50VJFGWw0asOhWO972IYG1id56ufbfjerNts5vbN0FSettmfdDxxGPbhQRhySy7rODssCBkCCCDblSZ6RdBlpFn2wqsuwS19nbHqgkeqCL57ur21oESKt9kW2iWPaTvNQsJoiNVcPeYy/pGksdvkLbgovkBkKgJwUnJeS+vcIHo+0QkvyiOaNXCFLXzsTtX2WHMAbjwphaJ9HfORs0mEvaSMnaaHO20h4qDvWrP5B0UMseBSOJgQQSDslstq+8nq5Xz31I0do8osySbLJJI7AZ+q4BZTf7RbwNEUnuJXpmxAbCQlSCGlDAjcR0clj3davXo8k2dEO3IYg/s7f4Uqa6ylcMMMST8nxEqLfeUsCnsamXVBwNBynh0eKt3fOVHUiwlej8fOSHlFl4yR/n+tqbcQl5kXgEJOfEFCN3cDwy4AbN1TUD9I/+H/NHy45nKx7juLdFnKxy9VfeeV+QI38xfI1Quil056qW3BrDf7LWAzA3X9XfcXr1ihfCA/ZTlxsbfm+7IHeDTrWC3+ubjwbfncerx5brC58Kf7DnwRvYTx8Pjnk5Fjvo9bwp91R7O/lft7hdag6vEXfdlsDw2b91sz2d2+rHRmeHQ80/P59l+tVdoFs5T2qeO+8lu2+Vss7g2uQaA+6OA61vsnxIub9vfnWu+jlf7O5/wCZ/KlZDoc/Ng/n8+JrY9QBbCknL5xj7F/CtI7HpYjTBRQzUVxw+KjkvsOr2NjssDY8jbdXarHihRRRQBRRRQGcao+tpL/McT7o6t9Ct15r/YHiNo/EVU6pizaR/wAwxX8lTtHYhYxipHyVAGJ7ApJ8cvdWSL8FLrNrPHBiWXY6RlgZCGA2C7mN0B5gAXPeKmaH1lxWIwUrxRo2JjZRsi4VgSDcAnI7O1lfh4Uu6f1Vxkw+V7Ks8g2mhXJo1sAgH1yFtfjfdemvUXRLYbDAuSDJ13UgDZyyz3iy2uDuN6sehVhhFhYyg71G9e7r5MZA/dtC1xyv+T5VzxyuUITJjkD9W+RbvAua4YQxOTPFsMXAUurA7QW9hcZZXNdUxQYsFsSps1iDsnfY23Gxq0XZ3PLlHMmiv1kw2KeNBhJAjqwJ2vpDvseOZHH32yXsL77Z23X7KQ59Z8QJmcG6K7KYQo9RW2Tnba28r795tar/AA+l48WskSM6kqQRZlcKertLft4jcag6Z4apTinJaPUup5FVSWIUDeSQAO8muc2LCrcm2VyeA5mqrHaNYwJAYzOnURtpwDsi3XJO8ggHLOvmsuiZJcM0cTBWI3fWUb0v9G/P8aamVlyzIdd5S6JMd082JdeewpiVf5qatBTW0BLw2Yp1v3lx8aW/SXpKOVcKkaGMxLIjxHfEbxDZPZ1TY1fYd9nV1uZjz72kF/fVeGS9xd9H8YYyHsQeBNz7UG/Km9R13Phx4DPPfv7fEm10v0fy2Mv/AEve/l5jx3FzVuPeff8AnLPkAbE1Loo9Mi4j+yzEeRzFshuHqjhvst65YZv7Gw32LjnxJ3i/acr8d+bV20yuQvzz/rv9t93CwNRme2HkHY2/tGW/vB48899QWLDAG2GT7g9oy/P8Waio0MtoZW7P5WJ3d/jle4sFtcV1cOV5Lbxtbz3ey53VWRuEwkpPHa/hHPPz/A0IZ90YwWEE8L1xbWnEYwrg4nMWHQszld77s27BuA8eVqvSGK2MEmeb/G5qoaf5PDZfXmjzPEKWI9y/vVvFWR2doVP9VOl3JsdNSNblixkIFwdoozA9WRLGwI53Ase3ur9EA1+OtHbaESgdUEAtb6XIHnX690Y14YieMae4UPLJNFFFAFFFFAZvqsetpH/McV/JXTFLfDY4DM9GcufUJrlqr62kv8xxPujq00L60+W/Y9xrJGnB6x2ISMx4tpWEar0ZVblW6VkCsQOR7PpeBmYMzmSdZlj6K46K3rFSOttjv+PC1KWjtYocNO+BlYbEbARuw6uzk6o99xS4Abd1RuO90jxKkA8DxGYNSmQ0zjonRcWGj6KIWS5NiSczmcz+cq7w4ZELlVCl22mI+k1gLntsBXF8WelSMISrKxMgIspFrKR23PlUfT+h1xUaxs7Jsurgrvut/wAfOx4VJXxF3WDQU3yhngiMiyWY2ZBstub12G+ytxzJqRq5oeWKQzz7MaqjC20CbEgksR1QoC8z4WzYtJ49YImlYMVW1woucyBu8akNYixFweB4jtqbnS8XVdL2Teh5hmV1V1IZWAKkbiDuIqFhdMo+JkwwDh41DEkDZINtxvfiOFSXkjiQk7KIik8gqgchuAFfYAjfOpsnaUdcW6y7xnxGftocxkXpmhT5VAQoDOvWI3mzAC/MgXrrKf8A+ePaV/1VNvKo/pWlvpCAfVijPnJL/tFTdO2XQMNstvoj4kF/eKh7Mshf1GjGzKeIaLy+cAzt2kcN43+qzg491vx3dx3W3Z5gUr6nRgQyNcDakVeG8Anj2P8AncW4p63h+c93eeW7q1RmiKPWDIxntbuyB5EAC/LdbJlsrCuQEwPzLAbxxKcrcr+3herTWbcl+Z393s+FsrWDVD0anViFt8ov4AHh3A+R43NS3BJ02OqR2j2HtHfvHgmd1ycmQRYdd7hmb7KbRuezLZ886utZcSFV+8fnL4eHZw1e0eUQyv8ApJAP1UHqr8T31eK1NsNR9rNLjkTdZ8WGl6NRZYjsj2e7dUB9qVkuMgFUfdFd9JYRxJMzAj5w2vxu1791rVLw8eYyrbhGGKlKVRuRdaC6OXCx4a4LzyKqhQb3MlySeGeznYfR8P09GlgANwAFYN6ItVS+NE5/RRZ2tltb1A8bE9wre6g5wooooAooooDPdW4dk44/Wx+Jb2qv8tS9CH5zEDtTysf612jwhjEoO9p53NuIeRmH7pWvGiE60x57HuNY8mnBi2nmkM8ryizO7nsNmIIXmBa3hRo3TeIg/RSso+re6/snL2VpuwqYqWNlBAcSqCAerIDc5/bEledI6vYaWYNJEDfiCVv37JFx31bKejHC54KUXuhYwfpGxC5SRxydoup+I9lXOG9JUP04pV+6Vb3la4aQ1IgeWyFohfMLmLdgbdVdpLUOzhYZeIHznvuo9lqZSssHPjUaofSDgzvkdfvRsf4Qalx67YM/+YXxVh7wKzjSOpc8ZCoVlJt6uWZ+9UTH6rYqJQzR3uCSFIZh3gb/AAvU2ZjLCzXwmkYjT2jmk6V5o2bo2iPrEFGNyCoFj/WvE2v2DiTZjJYKtgqRsLAZADbsLVmT6BxSqXaCQKOYz/Z3+yuaYCVoi6xuVHEK1vO1qambpPoedadM/K8UJdnZ6qqATc2XaN/3jlTTrk3/AAfBL2xeQjb8aQtkiUAggi+RFj6oPxp410kB0dgQN2R8lUfzUexlbUoNFKThha//AIh/YkW/xP8AUb6YcLjpYxkHYD6Oybd6kC67t4uMhuuKi6q4QnCt2yuR4RxfG9WaykE8Bb+v4HwArOxa5X6axayLGRcEXJVgQR3jlbjfhv3W9aKF2ivffIT35Dlnv5Hu3EwtKR7LryN7dhsDbwvfwO7MgXFbCXUXZgUQcSzM9h3WC7+W41FtSy1PmHT5ViGJziRrnkTfIcfee8190FpaSbFYlWN412dgWHVzI9tr1c6L0eIIljG+12PNjvNVOr+i2w6yM9tt2ubcANw+PjWqPWoUJU3BLvb9NCn0viEeSSNOsVybLLPl3VIwcXRQwvIqASkgbTKWGySpbY3lbg2PZal/Rz9WWdstpj4nMn2n2V0RQYJJ5WJI2UjFzk56w/VA4dp41pwebip51GT3d/Q/TGpWIwrYcDCurBbB7Lsna5leAPD3mmCsI9DGOkixSo1ysqkG/wBHiPaLfrVu9QcYUUUUAUUV4mayk8gaAWsS+V+ZNQNDOeknHZGf4/wqXiT1e6qvQmLTppxtrtWTq3F7dYg25ZnyrE04I2tcZjkgxH0STBJ2B842PdINn/qV3c3RW4rl+Hwq00nglxEEkLGwdSL/AFTvVh2hgD4UvaAxLSRFZBaQXRxykTJh559xFXiz1MBVvFxfGvkWGJbNWrzihaRT2ihs4x2GjFHJGqx3x0a80cccPnVPd76+aXPWXuI/PlXTSO9WHKuemDmnj7CPxqS0N4+Z10vJYL3k+VqNKyf2VRzC+7OuemfofrfCvmnGsqDt9tCsI3yeZjOs8+zjZm+rs/6UdMvpCiEUeBhG4RE+ex/tpZ12j/4hOu/OIf8AtxCmz0qL89hf8EjsybMe0VR7Hg1/1ZeL+ZaaoxH5Eh5tJbuuF/iuPzYx3O631V87VZaFQJgsKv8Ayyx/Wdzz7Tw47yLrVLPJsOQfrG1+Nzcfh4eWZQhaxuBsi/1v5SPHjlxPDfXHQEZYHFPcqisIhzP0nt2kWHjXHHxHEzLEpyuS5HBcrn88xV60sbBsNH1SqWUEZWFgLcxuqyR14Wnf333272V2r2Jl6KV5CznaJHHfwHZfwrlovTRxCPtKFZWsQDlY7j7DVhpNhBhZWyvs5X+schu5fClbQBKRMwG94k8yAfY3uqyep1UKs41FTb0S19LkbWdx1UAABO4eZqNi1Bm6P6EeyT94KoJ8xXrTIJZL85P4mt7K44aOySfda5Pcb1oedjZZqz8vkNGocM8ePwUpuFnlA42A6rBf2c6/TFYR6NZvleNwsYUlcKHldifpEMFW3DZMlv8A6rd6g5QooooArhjTaNu6u9VGtkrLhJWVirWFiN4uwB9hqGWhHNJR6lRjx1TYVjmtmr2JlxEk0KdJbZUhT1xle9uIz4XPZTTPpDEkW6e/3kQ/whfjXLV3EyxSStOQwYqUKWvkCCCLADhWeU7Z4KrHi/gJGA1nx+COyXlT7EysQeyz5gdxFXGj9fyJ2leIAPs7YRvpDIuA24lbAi/0RWhyaWglGzIoIPB1BHxFVWJ1J0fiM0jVDzibZt+qOr7KjYyiqlGWa1jxo/XTCSEp0mwG3bYKgHkSer7auIMWkkZ2WVtniCD7vGk3H+ihxnBiL9ki5/tL+FLuJ1M0lhySsbH7UL5keBDVZSZ1x7QfxR9DV8Sbop3/AJ/pXzSS3RD+cxWSR6yY/Dgo5e3KVL28SA3tq5w3pHJQLLBe30kbf+q2Q/aqykjqp42k2tbGi4/Mx/nlUXTrddB2X8b2FUkeveDkCEuUYbw6sLbuIuvtrrp/WXCoVYyq+QICEMSL33L8cqsmjenVgrO60uZ7rwP+Izkbw6H9mOP4qa1zTGgocZEgkuCM1dTZluBfeCCDYXBHAVk2EjbEzyzkGzScftNe36qm3lW5QpnuyFUZ4E3ebYka24CbCxQdHIOiSJY/tFl2je27Mcvq91l7SOkEaDba20VHmPcSadvSW39lX7/8rfjWYaFw4djLJ+hhs2e4vvA7bZHvtWaWpaEHN5UMer2BMce0/wCkfNuY4gd/54VU4N9rSbkbgjDuAAHwNWmO0unQCZATc9W9hYjeDc7vP4ip1MgL9NLzuqk8TxPduq/J25U68Yx2S+v7nzXSZnjh2LmOU5AA5tvXd2Enw7KtdXNV5ZFSBE2nuGbgqngSeAFh5U1ap6rySpGnqxoqqXtvsAOqOJ91abozRscCbEa2HE8WPMniaskTWrQozclrJ+iMt181Ajg0Y0ijpJ42R3f7HquFHBQG2u3ZrKNHpc2te+VudfrKaJXUqwDKwIIO4g5EHstSVgvRfg45hIGlKg3Edxa+8AsBtEdl/E1Y8qcnOTlLc8eiXVwYXDNIY9h5m2rH1tnIC98xe17fjT3XwCvtCoUUUUAVT63D+xzdw/iFXFVGtpAwc5JsAhJJ3ACxJPIWFDSi7VIvvRlVVesgc4aTYBLWFgN5sQcqnlwwuCCOBGfkRUBJZ3mEUC9NIQbRgXbsZjkI05s2VVPpauX2bcnpt6neGU9AGzB6O+YzB2b5g8aNEYxZYY5FbauouftfSHZnT7jNQWt83KrfZcEfvC9/KomjNT8Rh4njjhj2WJ6iPs52YXsRYr1r2uMwDlSxx/iaejjK9laz06deguaN07IQSkp6rMpBO1axtmDuq0h1re5UhGItcbjnu7KW4NAnCTTbRYNIwYq1uqczlbeM6g/JZRjjIB8y0dibj1huy31FizoqUU5RTbfHS++ncPa6fjfKSMeQIrhJobR0+ZjhueQCt8DSNp/SDRTYa2YdyhFzntbIv4XvVhp6d8PCZCpHqkbQIBBIFxzHbTKYTwlK8rNrL/Vy2xfo+wJPVLr3MT/Feqc6kwKTYyMBzIHuFSsJjm2FdWIBUNkcrEXqbgNPbagnrqeIsD5bj7KixjPBTVsrTvt1PsWDijjUIoFiMvGnqLOkSXFKWBXnexH5FNOD0/h2QHpkU8QzBSO8NY/jRnK6c46OL9Co9KUTNhY1QXZplQdl1bPuypC1hiWDBpEh6u0ATzIuWPmK07WDSETxhUYOdoNcZgZEXvu48OdJmC0J08UcMkZdtraCi99q5PDhY538acHdQoP2cuG+vQr9H6HWXBRxy3zs2RzBOY9htWjaoakBUUyLsRj1Y/pN2txAPmeyrzVvVVYbPLZpOA+indzPb5c6ZqskZV8Wl7tLwueYowoCqAAMgBuAr1RRVjzgooooAooooAooooAr4RX2igF/SWpeAmuWwyKx3tHeNj3tEVJ8asNC6FgwidHh41jXebZsx5ux6zntJNWFFB3BRRRQHOeBXFnVWHJgCPI1TYvVHCP/AHeweaEj2er7KvaKF4VZw/K2hGxfo9B9SbK+50B9oI91V+s2pOIlhKMUlQAk7G0sjZKPOyKLA8K0miosdCxtW6zWduqMJbAGJBEVZNlQoDgg2AsN++qvV3RrwRsj29ckbJJFrAfSzGYOVfoeWJWFmUMORAI9tU2M1Twkn90FPNCV9gy9lDsh2hTck5Rs10MlIrxbrDvpg1s0KmFlVEZmBTa61rjMi2QHKqJR1h31B6tOopxUlsxh0Xox8Q4SMDddidyi+88+4VoehdCx4dbKLsfWc7z+A7KTdSVZcYovYNBI1r7wGjAv5nzrRKlHhY2rLN7NPQKKKKk4AooooAooooAooooAooooAooooAooooAooooAooooAooooAooooBD9IOhsVLKssMPSoIwpCsocEMx9VyARZhuN8jlSK3SLIqPBOrk2CGGS7HkMrHvvat2opY7KWOq045Va3ev+Cpqdq5JE3yjEN86UKLGDdYoyVYgn6TkquYyFrC+ZLXRRQ5ZScndhRRRQqFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAf/9k="/>
        );
    };

    _renderBack2 = () => {
        return (
            <View>
                {this.props.opponentSkaterCard.name ?
                    <BoardSkaterCard key={'s:' + this.props.opponentSkaterCard.id}
                                     skater={this.props.opponentSkaterCard}/>
                    :
                    <Text>Loading...</Text>
                }
            </View>
        );
    };

    _flip = () => {
        this.setState({isFlipped: !this.state.isFlipped});
    };

    render() {
        return <View style={{flex: 1}}>
                <View style={{flex: 0.1}}>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        <JukeBox/>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.score.y}</Text>
                        <MoveCard key={this.props.move.id} move={this.props.move}/>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{this.props.score.o}</Text>
                    </View>
                </View>
                <View style={{flex: 0.25, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center'}}>


                        <FlipView style={{flex: 1}}
                                  front={this._renderFront()}
                                  back={this._renderBack()}
                                  isFlipped={this.state.isFlipped}
                                  onFlipped={(val) => {console.log('Flipped: ' + val);}}
                                  flipAxis="y"
                                  flipEasing={Easing.out(Easing.ease)}
                                  flipDuration={800}
                                  perspective={1000}/>

                    <Text>VS</Text>

                    <FlipView style={{flex: 1}}
                              front={this._renderFront2()}
                              back={this._renderBack2()}
                              isFlipped={this.state.isFlipped}
                              onFlipped={(val) => {console.log('Flipped: ' + val);}}
                              flipAxis="y"
                              flipEasing={Easing.out(Easing.ease)}
                              flipDuration={800}
                              perspective={-1000}/>

                </View>
            {this.props.gameState.turnInProgress == false ?
                <View style={{flex: 0.33, backgroundColor: 'white'}}>
                    <View style={styles.container2}>
                        {
                            this.props.skaters.map(function (skater) {
                                return <TouchableOpacity key={'y:' + skater.id}
                                                         onPress={ () => this.selectSkaterCard(skater) }>
                                    <View>
                                        <SkaterCard skater={skater}/>
                                    </View>
                                </TouchableOpacity>
                            }, this)
                        }
                    </View>
                </View>
                :
                <Button title='Next turn' onPress={ () => this.nextTurn() }/>
            }
            </View>;
    }
}

const styles = StyleSheet.create({
    container2: {
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
    }
);

export {HomeScreen}