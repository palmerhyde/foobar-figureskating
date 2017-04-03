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
        'photo' : 'data:image/jpeg;base64,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',
        'skill' : {
            'name' : 'Forward Scratch Spin',
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

function randomRange(min, max) {
    let range = max - min;
    return Math.floor((Math.random() * range +1) + min)
}