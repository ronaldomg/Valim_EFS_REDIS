/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:43:35.26
*/
gx.evt.autoSkip = false;
gx.define('gx0831', false, function () {
   this.ServerClass =  "gx0831" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV11pRemessaRetornoId=gx.fn.getIntegerValue("vPREMESSARETORNOID",'.') ;
   };
   this.Valid_Remessaretornoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15it2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11it2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", false, null, false, false);
   };
   this.e12it2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", false, null, false, false);
   };
   this.e13it2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", false, null, false, false);
   };
   this.e14it2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", false, null, false, false);
   };
   this.e17it1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,13,17,19,23,25,29,31,35,37,41,43,47,49,55,56,57,58];
   this.GXLastCtrlId =58;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0831",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(2785,55,"REMESSARETORNOID","Código","","RemessaRetornoId","int",0,"px",4,4,"right",null,[],2785,"RemessaRetornoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2786,56,"REMESSARETORNODESCRICAO","Descrição","","RemessaRetornoDescricao","svchar",0,"px",40,40,"left",null,[],2786,"RemessaRetornoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2787,57,"REMESSARETORNOTAMANHO","Tamanho","","RemessaRetornoTamanho","int",0,"px",4,4,"right",null,[],2787,"RemessaRetornoTamanho",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2792,58,"REMESSARETORNOTIPO","Tipo","","RemessaRetornoTipo","char",0,"px",1,1,"left",null,[],2792,"RemessaRetornoTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"REMESSARETORNOEMPRESAID",gxz:"Z2784RemessaRetornoEmpresaId",gxold:"O2784RemessaRetornoEmpresaId",gxvar:"A2784RemessaRetornoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2784RemessaRetornoEmpresaId=Value},v2z:function(Value){gx.O.Z2784RemessaRetornoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOEMPRESAID",gx.O.A2784RemessaRetornoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2784RemessaRetornoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 13 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOID",gxz:"ZV5cRemessaRetornoId",gxold:"OV5cRemessaRetornoId",gxvar:"AV5cRemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5cRemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5cRemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOID",gx.O.AV5cRemessaRetornoId,0)},c2v:function(){gx.O.AV5cRemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNODESCRICAO",gxz:"ZV6cRemessaRetornoDescricao",gxold:"OV6cRemessaRetornoDescricao",gxvar:"AV6cRemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV6cRemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNODESCRICAO",gx.O.AV6cRemessaRetornoDescricao,0)},c2v:function(){gx.O.AV6cRemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOTAMANHO",gxz:"ZV7cRemessaRetornoTamanho",gxold:"OV7cRemessaRetornoTamanho",gxvar:"AV7cRemessaRetornoTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cRemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOTAMANHO",gx.O.AV7cRemessaRetornoTamanho,0)},c2v:function(){gx.O.AV7cRemessaRetornoTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOTAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOBANCOEMPID",gxz:"ZV8cRemessaRetornoBancoEmpId",gxold:"OV8cRemessaRetornoBancoEmpId",gxvar:"AV8cRemessaRetornoBancoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cRemessaRetornoBancoEmpId=Value},v2z:function(Value){gx.O.ZV8cRemessaRetornoBancoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOBANCOEMPID",gx.O.AV8cRemessaRetornoBancoEmpId,0)},c2v:function(){gx.O.AV8cRemessaRetornoBancoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOBANCOEMPID")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOBANCOID",gxz:"ZV9cRemessaRetornoBancoId",gxold:"OV9cRemessaRetornoBancoId",gxvar:"AV9cRemessaRetornoBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cRemessaRetornoBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cRemessaRetornoBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOBANCOID",gx.O.AV9cRemessaRetornoBancoId,0)},c2v:function(){gx.O.AV9cRemessaRetornoBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCREMESSARETORNOBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCREMESSARETORNOEXTENSAOREM",gxz:"ZV10cRemessaRetornoExtensaoRem",gxold:"OV10cRemessaRetornoExtensaoRem",gxvar:"AV10cRemessaRetornoExtensaoRem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cRemessaRetornoExtensaoRem=Value},v2z:function(Value){gx.O.ZV10cRemessaRetornoExtensaoRem=Value},v2c:function(){gx.fn.setControlValue("vCREMESSARETORNOEXTENSAOREM",gx.O.AV10cRemessaRetornoExtensaoRem,0)},c2v:function(){gx.O.AV10cRemessaRetornoExtensaoRem=this.val()},val:function(){return gx.fn.getControlValue("vCREMESSARETORNOEXTENSAOREM")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(54),gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNODESCRICAO",gxz:"Z2786RemessaRetornoDescricao",gxold:"O2786RemessaRetornoDescricao",gxvar:"A2786RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2786RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.Z2786RemessaRetornoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A2786RemessaRetornoDescricao,0)},c2v:function(){gx.O.A2786RemessaRetornoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNODESCRICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTAMANHO",gxz:"Z2787RemessaRetornoTamanho",gxold:"O2787RemessaRetornoTamanho",gxvar:"A2787RemessaRetornoTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2787RemessaRetornoTamanho=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(54),gx.O.A2787RemessaRetornoTamanho,0)},c2v:function(){gx.O.A2787RemessaRetornoTamanho=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REMESSARETORNOTAMANHO",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOTIPO",gxz:"Z2792RemessaRetornoTipo",gxold:"O2792RemessaRetornoTipo",gxvar:"A2792RemessaRetornoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2792RemessaRetornoTipo=Value},v2z:function(Value){gx.O.Z2792RemessaRetornoTipo=Value},v2c:function(row){gx.fn.setGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(54),gx.O.A2792RemessaRetornoTipo,0)},c2v:function(){gx.O.A2792RemessaRetornoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("REMESSARETORNOTIPO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.Z2784RemessaRetornoEmpresaId = "" ;
   this.O2784RemessaRetornoEmpresaId = "" ;
   this.AV5cRemessaRetornoId = 0 ;
   this.ZV5cRemessaRetornoId = 0 ;
   this.OV5cRemessaRetornoId = 0 ;
   this.AV6cRemessaRetornoDescricao = "" ;
   this.ZV6cRemessaRetornoDescricao = "" ;
   this.OV6cRemessaRetornoDescricao = "" ;
   this.AV7cRemessaRetornoTamanho = 0 ;
   this.ZV7cRemessaRetornoTamanho = 0 ;
   this.OV7cRemessaRetornoTamanho = 0 ;
   this.AV8cRemessaRetornoBancoEmpId = "" ;
   this.ZV8cRemessaRetornoBancoEmpId = "" ;
   this.OV8cRemessaRetornoBancoEmpId = "" ;
   this.AV9cRemessaRetornoBancoId = 0 ;
   this.ZV9cRemessaRetornoBancoId = 0 ;
   this.OV9cRemessaRetornoBancoId = 0 ;
   this.AV10cRemessaRetornoExtensaoRem = "" ;
   this.ZV10cRemessaRetornoExtensaoRem = "" ;
   this.OV10cRemessaRetornoExtensaoRem = "" ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.Z2786RemessaRetornoDescricao = "" ;
   this.O2786RemessaRetornoDescricao = "" ;
   this.Z2787RemessaRetornoTamanho = 0 ;
   this.O2787RemessaRetornoTamanho = 0 ;
   this.Z2792RemessaRetornoTipo = "" ;
   this.O2792RemessaRetornoTipo = "" ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.AV5cRemessaRetornoId = 0 ;
   this.AV6cRemessaRetornoDescricao = "" ;
   this.AV7cRemessaRetornoTamanho = 0 ;
   this.AV8cRemessaRetornoBancoEmpId = "" ;
   this.AV9cRemessaRetornoBancoId = 0 ;
   this.AV10cRemessaRetornoExtensaoRem = "" ;
   this.AV11pRemessaRetornoId = 0 ;
   this.A2783RemessaRetornoBancoEmpId = "" ;
   this.A2781RemessaRetornoBancoId = 0 ;
   this.A2789RemessaRetornoExtensaoRem = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2786RemessaRetornoDescricao = "" ;
   this.A2787RemessaRetornoTamanho = 0 ;
   this.A2792RemessaRetornoTipo = "" ;
   this.Events = {"e15it2_client": ["ENTER", true] ,"e11it2_client": ["'GXM_FIRST'", true] ,"e12it2_client": ["'GXM_PREVIOUS'", true] ,"e13it2_client": ["'GXM_NEXT'", true] ,"e14it2_client": ["'GXM_LAST'", true] ,"e17it1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV6cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV7cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV8cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV9cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV10cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'A2785RemessaRetornoId',fld:'REMESSARETORNOID'}],[{av:'AV11pRemessaRetornoId',fld:'vPREMESSARETORNOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV6cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV7cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV8cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV9cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV10cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV6cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV7cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV8cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV9cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV10cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV6cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV7cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV8cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV9cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV10cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cRemessaRetornoId',fld:'vCREMESSARETORNOID'},{av:'AV6cRemessaRetornoDescricao',fld:'vCREMESSARETORNODESCRICAO'},{av:'AV7cRemessaRetornoTamanho',fld:'vCREMESSARETORNOTAMANHO'},{av:'AV8cRemessaRetornoBancoEmpId',fld:'vCREMESSARETORNOBANCOEMPID'},{av:'AV9cRemessaRetornoBancoId',fld:'vCREMESSARETORNOBANCOID'},{av:'AV10cRemessaRetornoExtensaoRem',fld:'vCREMESSARETORNOEXTENSAOREM'},{av:'A2784RemessaRetornoEmpresaId',fld:'REMESSARETORNOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV11pRemessaRetornoId", "vPREMESSARETORNOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[25]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[31]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[43]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[49]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0831());
