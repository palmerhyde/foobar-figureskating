import {Disciplines, Rarity} from '../../util/enums';
import guid from 'uuid/v4';

// TODO: skaters need to come from a data store.
let skaters = [
    {
        'id' : guid(),
        'name' : 'Chazz Michael Michaels',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'http://stream1.gifsoup.com/view6/4076520/blades-of-glory-skating-o.gif',
        'skill' : {
            'name' : 'Iron Lotus',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.PAIRS,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Tonya Harding',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://m.wsj.net/video/20140110/011014lunchgold/011014lunchgold_1280x720.jpg',
        'skill' : {
            'name' : 'Triple Axel',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline': Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id': guid(),
        'name': 'Johnny Weir',
        'edges': randomRange(70, 80),
        'jumps': randomRange(70, 80),
        'form': randomRange(70, 80),
        'presentation': randomRange(70, 80),
        'photo': 'https://guardianlv.com/wp-content/uploads/2014/02/johnnyweir.jpg',
        'skill': {
            'name': 'Quad Axel',
            'value': randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.MENS_SINGLES,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Scott Hamilton',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'http://www.scotthamilton1984.com/wp-content/uploads/2012/08/slider-top-skater.jpg',
        'skill' : {
            'name' : 'Scottie Turns',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.MENS_SINGLES,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'kristi Yamaguchi',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://d2zfkpu1r6ym98.cloudfront.net/sites/guideposts.org/files/content_editors/marquee/kyamaguchi_marquee.jpg',
        'skill' : {
            'name' : 'Spiral',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Jayne Torvill',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUThSDr0Q6Gj1yAXatUKg0cMqKq7LSV1EzT9c8Oyz5HPFE4gm1',
        'skill' : {
            'name' : 'Spiral',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.ICE_DANCING,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Christopher Dean',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUThSDr0Q6Gj1yAXatUKg0cMqKq7LSV1EzT9c8Oyz5HPFE4gm1',
        'skill' : {
            'name' : 'Spiral',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.ICE_DANCING,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Jimmy MacElroy',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDJ1Fszrt6OfaEwbOfqUP9KGoVpNkAL-6wQSXfeUDXxehtp3Ow',
        'skill' : {
            'name' : 'Iron Lotus',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.PAIRS,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Nancy Kerrigan',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://cdn5.thr.com/sites/default/files/imagecache/scale_crop_768_433/2013/07/135289763.jpg',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Ekaterina Gordeeva',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://s-media-cache-ak0.pinimg.com/originals/14/0d/01/140d01bfc1cbcf21485b9ad5fb112e5d.jpg',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.PAIRS,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Brian Boitano',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://www.lgbtqnation.com/assets/2014/01/boitano_brian.jpg',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.MENS_SINGLES,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Michelle Kwan',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ9rJFEF25sJ13zKfwIbo-aXGeuUcfu7aDV9kKKxsX-v-tBUvQ',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Dorothy Hamill',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'http://images.agoramedia.com/everydayhealth/gcms/dorothy-hamill-1976-olympics-RM-722x406.jpg?width=1440',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Katarina Witt',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'http://sport360.com/sites/default/files/styles/x644/public/katarina-witt1-%28Read-Only%29.jpg?itok=U9XpP-Nl',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Tara Lipinski',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'http://www.arabiaweddings.com/sites/default/files/news/2015/12/tara_lipinski.png',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Peggy Fleming',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'http://1.bp.blogspot.com/-2FYCJy6Iar0/URXVcu1HKfI/AAAAAAAAIio/MHd5Gzx1hh4/s1600/peggy-fleming-olympics.jpg',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Kim Yuna',
        'edges' : randomRange(70, 80),
        'jumps' : randomRange(70, 80),
        'form' : randomRange(70, 80),
        'presentation' : randomRange(70, 80),
        'photo' : 'https://cdn.theatlantic.com/assets/media/img/mt/2014/02/kim_yu_na/lead_large.jpg',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.LADIES_SINGLES,
        'gender' : 'F',
        'xp' : 0,
        'rarity': Rarity.LOCAL
    },
    {
        'id' : guid(),
        'name' : 'Palmer Molloy',
        'edges' : randomRange(90, 100),
        'jumps' : randomRange(90, 100),
        'form' : randomRange(90, 100),
        'presentation' : randomRange(90, 100),
        'photo' : 'https://scontent.fsnc1-5.fna.fbcdn.net/v/t31.0-8/14481767_10207571721790755_6296817429078953337_o.jpg?oh=722ad2143b15fdbacc3cb53ed2c9c3a1&oe=595AF102',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(70, 80)
        },
        'level' : 1,
        'discipline' : Disciplines.MENS_SINGLES,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.REGIONAL
    },
    {
        'id' : guid(),
        'name' : 'Brian Boitano',
        'edges' : randomRange(110, 120),
        'jumps' : randomRange(110, 120),
        'form' : randomRange(110, 120),
        'presentation' : randomRange(110, 120),
        'photo' : 'http://cdn.playbuzz.com/cdn/5cbc22f1-0df6-4761-8962-bbd474bb765f/b08d41f9-6b95-4a10-87fb-ce99e1d53e9f.jpg',
        'skill' : {
            'name' : 'Edge',
            'value' : randomRange(110, 120)
        },
        'level' : 1,
        'discipline' : Disciplines.MENS_SINGLES,
        'gender' : 'M',
        'xp' : 0,
        'rarity': Rarity.SECTIONAL
    }
];

export default skaters;

// TODO: Move to a utility / helper file
function randomRange(min, max) {
    let range = max - min;
    return Math.floor((Math.random() * range +1) + min)
}