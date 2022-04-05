import sys
import base58
import uuid
from workflow import Workflow3

def main(wf):
    base58.alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
    prefix = sys.argv[1].split(' ')[0]
    internal_id = uuid.UUID('{%s}' % sys.argv[1].split(' ')[1])
    unencoded_string = str(bytearray.fromhex(internal_id.hex))
    encoded_string = base58.b58encode(unencoded_string)
    external_id = prefix + encoded_string
    print(external_id)
if __name__ == "__main__":
    wf = Workflow3()
    sys.exit(wf.run(main))