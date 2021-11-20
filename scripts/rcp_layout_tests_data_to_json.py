#! /usr/bin/env python
import json

# stand alone recipe
rcp_single = {'allergens': ['celery', 'molluscs', 'dairy'],
  'atomic': False,
  'components': {},
  'description': 'squid stuffed w/ chicken spinach pine nuts & cheese topped '
                 'w/ orange pepper and served with a lemon stock',
  'dt_date': 1637236261614,
  'dt_date_readable': '2021 11 18',
  'dt_day': 'thu',
  'dt_last_update': 0,
  'dt_rollover': 1637298001614,
  'dt_time': '1151',
  'id': 992,
  'ingredients': [['1', '180g', '(0)', 'chicken dark meat'],
                  ['1', '200g', '(0)', 'onion'],
                  ['1', '60g', '(0)', 'mushrooms'],
                  ['1', '100g', '(0)', 'spinach'],
                  ['1', '16g', '(0)', 'pine nuts'],
                  ['2', '20g', '(0)', 'extra mature cheddar'],
                  ['1', '20g', '(0)', 'lemon juice'],
                  ['1', '2g', '(0)', 'lemon zest'],
                  ['1', '320g', '(4)', 'small squid tubes'],
                  ['1', '40g', '(0)', 'red pepper'],
                  ['1', '20g', '(0)', 'olive oil'],
                  ['2', '10g', '(0)', 'chicken stock cube'],
                  ['1', '200g', '(0)', 'water'],
                  ['1', '20g', '(0)', 'lemon juice'],
                  ['1', '20g', '(0)', 'olive oil'],
                  ['1', '2g', '(0)', 'salt']],
  'lead_image': '20190516_162549_squid stuffed w chicken and spinach.jpg',
  'method': 'Cook the chicken thigh in a pan until just cooked through then '
            'debone & dice it.\n'
            'Cook the onions until starting to turn brown and add them to the '
            'diced chicken.\n'
            'Dice the mushrooms and cook until golden and add them to the '
            'diced chicken.\n'
            'Add the pine nuts to the pan and cook until golden brown. tip: '
            'Keep them moving or cook in butter!\n'
            'Wilt the spinach and drain off excess liquid add them to the '
            'diced chicken.\n'
            'Finally add the grated cheese & pine nuts and mix into a stuffing '
            'mix and the juice and zest of half a lemon and mix well.\n'
            'Remove the quill from the squid tubes if present and fill with '
            'stuffing.\n'
            'Place in a small baking dish side by side with a slice of lemon '
            'between each one\n'
            'Mix the rest of the ingredients except the pepper into a stock '
            'and pour over the squid.\n'
            'Lay a strip of pepper on each squid and bake in a preheated oven '
            '180C /15m',
  'notes': 'The stuffing comes out a bit and mixes w/ the stock making a great '
           'sauce\n'
           'Mum made this - so so good - a whole pepper going in 20mins before '
           'then add the squid for 15m\n'
           'The centre is cooked and going into a hot tray will cook the squid '
           'enough in 15m I reckon\n'
           'Next time: Use whole red pepper (1 inch dice) and roast for 180C / '
           '35 minutes then add squid\n'
           '180C / probe 70C (between filling and squid)',
  'nutrinfo': {'density': 1,
               'n_Al': 0.0,
               'n_Ca': 9.28,
               'n_En': 265.0,
               'n_Fa': 15.85,
               'n_Fb': 1.68,
               'n_Fm': 7.61,
               'n_Fo3': 4.58,
               'n_Fp': 2.87,
               'n_Fs': 3.35,
               'n_Pr': 21.69,
               'n_Sa': 1.61,
               'n_St': 0.05,
               'n_Su': 2.89,
               'serving_size': 115.0,
               'servings': 4.0,
               'units': 'g',
               'yield': 460.0},
  'ri_id': 99201,
  'ri_name': 'squid stuffed w chicken and spinach',
  'tags': ['chicken', 'shellfish'],
  'text_file': '20190516_162549_squid stuffed w chicken and spinach.txt',
  'type': ['snack',
           'brunch',
           'component',
           'amuse',
           'side',
           'starter',
           'sushi',
           'fish',
           'lightcourse',
           'main',
           'comfort',
           'low_cal',
           'serve_rt',
           'serve_warm'],
  'user_rating': 5,
  'user_tags': ['none_listed'],
  'username': 'carter'}


# guinea fowl tagine w couscous & salad
   # guinea fowl tagine
   # chermoula
   # couscous chermoula
   # green leaf & orange beet

# recipe w sub components
rcp_guinea_dinner = {'allergens': ['dairy', 'celery', 'gluten'],
  'atomic': False,
  'components': {},
  'description': 'guinea fowl tagine w couscous & salad',
  'dt_date': 1637238811912,
  'dt_date_readable': '2021 11 18',
  'dt_day': 'thu',
  'dt_last_update': 0,
  'dt_rollover': 1637298031912,
  'dt_time': '1233',
  'id': 513,
  'ingredients': [['0', '180g', '(0)', 'guinea fowl tagine'],
                  ['0', '100g', '(0)', 'couscous chermoula'],
                  ['0', '200g', '(0)', 'green leaf & orange beet']],
  'lead_image': '20200528_163128_guinea fowl tagine w couscous & salad.jpg',
  'method': '',
  'notes': '',
  'nutrinfo': {'density': 1,
               'n_Al': 0.0,
               'n_Ca': 14.11,
               'n_En': 118.0,
               'n_Fa': 4.27,
               'n_Fb': 1.63,
               'n_Fm': 2.31,
               'n_Fo3': 0.24,
               'n_Fp': 0.67,
               'n_Fs': 0.85,
               'n_Pr': 5.85,
               'n_Sa': 0.49,
               'n_St': 0.58,
               'n_Su': 7.32,
               'serving_size': 480.0,
               'servings': 1.0,
               'units': 'g',
               'yield': 480.0},
  'ri_id': 51301,
  'ri_name': 'guinea fowl tagine w couscous & salad',
  'tags': ['veggie'],
  'text_file': '20200528_163128_guinea fowl tagine w couscous & salad.txt',
  'type': ['salad', 'main', 'comfort', 'low_cal', 'serve_rt', 'serve_warm'],
  'user_rating': 1,
  'user_tags': ['none_listed'],
  'username': 'carter'}

# guinea fowl tagine
rcp_roast_bird = {'allergens': ['fish'],
  'atomic': False,
  'components': {},
  'description': 'browned guinea fowl coated in chermoula - a north african '
                 'marinade - cooked until juicy tagine style with mixed veg '
                 'prunes salted lemon and dates - packed with flavour serve '
                 'with couscous chermoula',
  'dt_date': 1637239237949,
  'dt_date_readable': '2021 11 18',
  'dt_day': 'thu',
  'dt_last_update': 0,
  'dt_rollover': 1637298037949,
  'dt_time': '1240',
  'id': 998,
  'ingredients': [['1', '1050g', '(1)', 'guinea fowl raw'],
                  ['0', '290g', '(0)', 'chermoula'],
                  ['1', '280g', '(0)', 'squash'],
                  ['1', '200g', '(0)', 'sweet potato'],
                  ['1', '250g', '(0)', 'carrots'],
                  ['1', '250g', '(0)', 'red onions'],
                  ['1', '36g', '(0)', 'prunes'],
                  ['1', '36g', '(0)', 'dates'],
                  ['1', '10g', '(0)', 'salted lemon'],
                  ['1', '2g', '(0)', 'lemon zest'],
                  ['2', '1g', '(0)', 'harissa powder'],
                  ['0', '200g', '(0)', 'chermoula'],
                  ['1', '400g', '(0)', 'water']],
  'lead_image': '20200313_133803_guinea fowl tagine.jpg',
  'method': '3746 - clay tray 1464\n'
            'Cook the veg for 160C / 30min first \xa0then add basted bird\n'
            'Brown the bird off in frying pan before roasting.\n'
            'Coat in chermoula, and place 300g water in the bottom of the '
            'tin.\n'
            'Cover with tin foil roast util probe hits 75C (160C fan / 1h)',
  'notes': '',
  'nutrinfo': {'density': 1,
               'n_Al': 0.0,
               'n_Ca': 11.89,
               'n_En': 151.0,
               'n_Fa': 6.55,
               'n_Fb': 1.42,
               'n_Fm': 3.5,
               'n_Fo3': 0.65,
               'n_Fp': 1.08,
               'n_Fs': 1.3,
               'n_Pr': 11.62,
               'n_Sa': 0.5,
               'n_St': 1.37,
               'n_Su': 6.03,
               'serving_size': 2280.0,
               'servings': 1.0,
               'units': 'g',
               'yield': 2280.0},
  'ri_id': 99801,
  'ri_name': 'guinea fowl tagine',
  'tags': ['fish'],
  'text_file': '20200313_133803_guinea fowl tagine.txt',
  'type': ['lunch', 'main', 'comfort', 'serve_warm'],
  'user_rating': 1,
  'user_tags': ['none_listed'],
  'username': 'carter'}

# chermoula
rcp_cherm = {'allergens': ['fish'],
  'atomic': False,
  'components': {},
  'description': 'chermoula is a north african marinade / dip traditionally '
                 'for fish or seafood but also used for meat and veg, this '
                 'version is a nod in the right direction - a very tasty nod!',
  'dt_date': 1637241619978,
  'dt_date_readable': '2021 11 18',
  'dt_day': 'thu',
  'dt_last_update': 0,
  'dt_rollover': 1637298019978,
  'dt_time': '1320',
  'id': 942,
  'ingredients': [['1', '50g', '(0)', 'red onion'],
                  ['2', '26g', '(0)', 'galangal paste'],
                  ['1', '40g', '(0)', 'olive oil'],
                  ['1', '86g', '(0)', 'lemon juice'],
                  ['2', '10g', '(0)', 'fish sauce'],
                  ['1', '40g', '(0)', 'honey'],
                  ['1', '4g', '(0)', 'cumin seeds'],
                  ['1', '4g', '(0)', 'sweet paprika'],
                  ['1', '4g', '(0)', 'turmeric powder'],
                  ['1', '26g', '(0)', 'coriander salsa']],
  'lead_image': '20200313_133803_chermoula.jpg',
  'method': 'Cut the red onion brunoise and mixall the ingredients together',
  'notes': '',
  'nutrinfo': {'density': 1,
               'n_Al': 0.0,
               'n_Ca': 19.3,
               'n_En': 213.0,
               'n_Fa': 15.79,
               'n_Fb': 1.47,
               'n_Fm': 10.8,
               'n_Fo3': 0.0,
               'n_Fp': 1.89,
               'n_Fs': 2.11,
               'n_Pr': 1.29,
               'n_Sa': 1.16,
               'n_St': 0.44,
               'n_Su': 14.74,
               'serving_size': 0.0,
               'servings': -1.0,
               'units': 'g',
               'yield': 290.0},
  'ri_id': 94201,
  'ri_name': 'chermoula',
  'tags': ['fish'],
  'text_file': '20200313_133803_chermoula.txt',
  'type': ['sauce'],
  'user_rating': 1,
  'user_tags': ['none_listed'],
  'username': 'carter'}


# couscous chermoula
rcp_cc = {'allergens': ['celery', 'dairy', 'gluten'],
  'atomic': False,
  'components': {},
  'description': 'classic marrocan fair this couscous recipe is a GREAT '
                 'partner to any dish with chermoula flavouring such as guinea '
                 'fowl tagine / veggie tagine - cracking combo',
  'dt_date': 1637240301739,
  'dt_date_readable': '2021 11 18',
  'dt_day': 'thu',
  'dt_last_update': 0,
  'dt_rollover': 1637298021739,
  'dt_time': '1258',
  'id': 258,
  'ingredients': [['1', '100g', '(0)', 'couscous'],
                  ['1', '200g', '(0)', 'water'],
                  ['2', '5g', '(0)', 'veg stock cube'],
                  ['1', '26g', '(0)', 'flaked almonds'],
                  ['1', '6g', '(0)', 'butter'],
                  ['1', '14g', '(0)', 'dried cranberries'],
                  ['1', '34g', '(0)', 'dried apricots'],
                  ['1', '20g', '(0)', 'olives'],
                  ['2', '10g', '(0)', 'cocktail onions'],
                  ['1', '2g', '(0)', 'mint'],
                  ['1', '1g', '(0)', 'salt flakes']],
  'lead_image': '20200313_133803_couscous chermoula partner.jpg',
  'method': '1149 - grey flat bowl 706g\n'
            'Boil kettle and pour 200ml boiling water into beaker w stock cube '
            'and dissolve it\n'
            'Place the couscous in a suitable bowl (should be about an inch '
            'deep once stock and couscous mixed) and add the stock.\n'
            'Place a plate over the top an leave until required - at least '
            '20mins.\n'
            'Chop the mint and dice the rest of the ingredients and mix '
            'everything together',
  'notes': '',
  'nutrinfo': {'density': 1,
               'n_Al': 0,
               'n_Ca': 0,
               'n_En': 0,
               'n_Fa': 0,
               'n_Fb': 0,
               'n_Fm': 0,
               'n_Fo3': 0,
               'n_Fp': 0,
               'n_Fs': 0,
               'n_Pr': 0,
               'n_Sa': 0,
               'n_St': 0,
               'n_Su': 0,
               'serving_size': 0,
               'servings': 3.0,
               'units': 'g',
               'yield': 440.0},
  'ri_id': 25801,
  'ri_name': 'couscous chermoula',
  'tags': ['veggie'],
  'text_file': 'none_listed',
  'type': ['snack',
           'brunch',
           'lunch',
           'salad',
           'component',
           'side',
           'starter',
           'lightcourse',
           'main',
           'serve_warm'],
  'user_rating': 1,
  'user_tags': ['none_listed'],
  'username': 'carter'}

# green leaf salad

rcp_salad = {'allergens': ['none_listed'],
  'atomic': False,
  'components': {},
  'description': 'green leaf w/ courgette ribbons & mange tout dressed w/ '
                 'orange beetroot',
  'dt_date': 1637239132213,
  'dt_date_readable': '2021 11 18',
  'dt_day': 'thu',
  'dt_last_update': 0,
  'dt_rollover': 1637298052213,
  'dt_time': '1238',
  'id': 551,
  'ingredients': [['1', '82g', '(0)', 'chinese lettuce'],
                  ['1', '20g', '(0)', 'mange tout'],
                  ['1', '50g', '(0)', 'mixed green leaf'],
                  ['1', '120g', '(0)', 'courgette'],
                  ['0', '100g', '(0)', 'orange beetroot'],
                  ['0', '40g', '(0)', 'lemon vinaigrette'],
                  ['1', '6g', '(0)', 'olive oil'],
                  ['1', '1g', '(0)', 'salt flakes']],
  'lead_image': '20200528_161914_green leaf & orange beet.jpg',
  'method': '',
  'notes': '',
  'nutrinfo': {'density': 1,
               'n_Al': 0.0,
               'n_Ca': 10.84,
               'n_En': 63.0,
               'n_Fa': 1.71,
               'n_Fb': 1.27,
               'n_Fm': 1.06,
               'n_Fo3': 0.0,
               'n_Fp': 0.2,
               'n_Fs': 0.23,
               'n_Pr': 1.27,
               'n_Sa': 0.27,
               'n_St': 0.0,
               'n_Su': 9.44,
               'serving_size': 419.0,
               'servings': 1.0,
               'units': 'g',
               'yield': 419.0},
  'ri_id': 55101,
  'ri_name': 'green leaf & orange beet',
  'tags': ['veggie', 'vegan'],
  'text_file': '20200528_161914_green leaf & orange beet.txt',
  'type': ['salad',
           'component',
           'side',
           'starter',
           'low_cal',
           'serve_cold',
           'serve_rt'],
  'user_rating': 1,
  'user_tags': ['none_listed'],
  'username': 'carter'}

json_format_rcps = ''

rcps = [rcp_single,rcp_guinea_dinner,rcp_roast_bird,rcp_cherm,rcp_cc,rcp_salad]

for rcp in rcps:
    json_format_rcps = json_format_rcps + "\n\n\n" + json.dumps(rcp)
    
print(json_format_rcps)

print('\n\n\n')
for rcp in rcps:
    print(f"'{rcp['ri_name']}': '{rcp['ri_id']}',")

