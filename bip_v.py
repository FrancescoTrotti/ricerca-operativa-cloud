import networkx as nx
from networkx.algorithms import bipartite

def verifier(nodes, edges, choice):
    g = nx.Graph()
    g.add_nodes_from(nodes);
    g.add_edges_from(edges);
    is_bip = nx.is_bipartite(g)
    if choice in "true":
        choice = True
    else:
        choice = False
    if not(is_bip ^ choice):
        print('Risposta esatta')
    else:
        print('Risposta errata')