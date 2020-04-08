var g = $graph_data ;

s = new sigma({graph: g, container: '$container', settings: {
            minNodeSize: 8,
            maxNodeSize: 20,
            minEdgeSize: 5,
            maxEdgeSize: 6,
            doubleClickEnabled: false,
            arrowSizeRatio: 5,
            scalingMode: 'inside',
            nodeHoverColor: 'node',
            defaultNodeHoverColor: '#f00',
            defaultNodeColor: 'blue',
            sideMargin: 0.1
        }
});
 /*
s.graph.nodes().forEach(function(n) {
  n.originalColor = n.color;
});
s.graph.edges().forEach(function(e) {
  e.originalColor = e.color;
});
*/

/*
s.bind('clickNode', function(e) {
  var nodeId = e.data.node.id,
      toKeep = s.graph.neighbors(nodeId);
  toKeep[nodeId] = e.data.node;

  s.graph.nodes().forEach(function(n) {
    if (toKeep[n.id])
      n.color = n.originalColor;
    else
      n.color = '#eee';
  });

  s.graph.edges().forEach(function(e) {
    if (toKeep[e.source] && toKeep[e.target])
      e.color = e.originalColor;
    else
      e.color = '#eee';
  });

  s.refresh();
});
*/
/*
s.bind('clickStage', function(e) {
  s.graph.nodes().forEach(function(n) {
    n.color = n.originalColor;
  });

  s.graph.edges().forEach(function(e) {
    e.color = e.originalColor;
  });

  s.refresh();
});
*/


s.bind('clickNode', function(e) {
    var node = e.data.node;
    var nodeId = node.id
    if (!node.isSelected){
        node.isSelected = true;
        node.color = "#f00";
        node.orginalColor = "#f00"
        command = "first_set.append('"+nodeId+"')"
        var kernel = IPython.notebook.kernel;
        kernel.execute(command);        
    }else if(node.color == "#f00"){
        node.color = "#ff0";
        node.orginalColor = "#ff0"
        command = "second_set.append('"+nodeId+"')"
        var kernel = IPython.notebook.kernel;
        kernel.execute(command);
        command_1 = "first_set.remove('"+nodeId+"')"
        kernel.execute(command_1);
    }else{
        node.isSelected = false;
        node.color = "#000";
        node.orginalColor = "#000"
        command = "second_set.remove('"+nodeId+"')"
        var kernel = IPython.notebook.kernel;
        kernel.execute(command);        
    }

    s.refresh();
  });



















