import subprocess

out = subprocess.check_output(["ls", "-l"], universal_newlines=True)
print(out)
