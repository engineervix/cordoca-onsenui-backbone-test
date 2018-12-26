#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
$python3 faker_gen.py

This script uses the `Faker <https://github.com/joke2k/faker>`_ package
to generate a JSON file with dummy data for testing purposes. We are using the
`company<https://faker.readthedocs.io/en/stable/providers/faker.providers.company.html>`_ provider
"""

import io

import simplejson as json
from titlecase import titlecase
from faker import Factory
from faker.providers import company

__author__ = "Victor Miti"
__copyright__ = "Copyright 2018, Victor Miti"
__credits__ = ['']
__license__ = "MIT"
__version__ = "1.0"
__maintainer__ = "Victor Miti"
__email__ = "victormiti@gmail.com"
__status__ = "Production"

fake = Factory.create()
fake.add_provider(company)

company_ids = []
company_names = []
company_suffixes = []
company_catch_phrases = []
company_brandings = []

for i in range(365):
    company_ids.append(i + 1)
    company_names.append(titlecase(fake.company()))
    company_suffixes.append(fake.company_suffix())
    company_catch_phrases.append(titlecase(fake.catch_phrase()))
    company_brandings.append(titlecase(fake.bs()))

fake_company_data = []

for v, w, x, y, z, in zip(company_ids, company_names, company_suffixes, company_catch_phrases, company_brandings):
    company = {
        "id": f"{v}",
        "name": f"{w}",
        "suffix": f"{x}",
        "catchphrase": f"{y}",
        "branding": f"{z}"
    }
    fake_company_data.append(company)

with io.open('dummy_company_data.json', 'a', encoding='utf-8') as f:
    f.write(json.dumps(fake_company_data,
                       sort_keys=False,
                       indent=4 * ' ',
                       ensure_ascii=False
                       )
            )
