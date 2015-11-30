from pg_schema_version import version_looks_valid

def test_version_looks_valid():
    assert version_looks_valid('1.13_run15++beta2') == True
    assert version_looks_valid('whatever123') == False

# https://pytest.org/latest/fixture.html
# http://www.pydanny.com/pytest-no-boilerplate-testing-2.html
