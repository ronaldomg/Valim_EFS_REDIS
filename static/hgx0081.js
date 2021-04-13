/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:51:13.38
*/
gx.evt.autoSkip = false;
gx.define('hgx0081', false, function () {
   this.ServerClass =  "hgx0081" ;
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
      this.AV6pCentroCustoId=gx.fn.getControlValue("vPCENTROCUSTOID") ;
   };
   this.Valid_Empresacentrocustoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESACENTROCUSTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15292_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11292_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", false, null, false, false);
   };
   this.e12292_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", false, null, false, false);
   };
   this.e13292_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", false, null, false, false);
   };
   this.e14292_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", false, null, false, false);
   };
   this.e17291_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,13,17,19,25,26,27,28];
   this.GXLastCtrlId =28;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",24,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hgx0081",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(51,25,"CENTROCUSTOID","Código Centro Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],51,"CentroCustoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(150,26,"CENTROCUSTOSUPERIOR","Centro de Custo Superior","","CentroCustoSuperior","svchar",0,"px",30,30,"left",null,[],150,"CentroCustoSuperior",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(151,27,"CENTROCUSTOFINAL","Centro de Custo Final","","CentroCustoFinal","svchar",0,"px",30,30,"left",null,[],151,"CentroCustoFinal",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(152,28,"CENTROCUSTONIVEL","Nível","","CentroCustoNivel","int",0,"px",4,4,"right",null,[],152,"CentroCustoNivel",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Empresacentrocustoempresaid,isvalid:null,rgrid:[this.Grid1Container],fld:"EMPRESACENTROCUSTOEMPRESAID",gxz:"Z153EmpresaCentroCustoEmpresaId",gxold:"O153EmpresaCentroCustoEmpresaId",gxvar:"A153EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A153EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.Z153EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESACENTROCUSTOEMPRESAID",gx.O.A153EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.A153EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCENTROCUSTOID",gxz:"ZV5cCentroCustoId",gxold:"OV5cCentroCustoId",gxvar:"AV5cCentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5cCentroCustoId=Value},v2z:function(Value){gx.O.ZV5cCentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCCENTROCUSTOID",gx.O.AV5cCentroCustoId,0)},c2v:function(){gx.O.AV5cCentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(24),gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOSUPERIOR",gxz:"Z150CentroCustoSuperior",gxold:"O150CentroCustoSuperior",gxvar:"A150CentroCustoSuperior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A150CentroCustoSuperior=Value},v2z:function(Value){gx.O.Z150CentroCustoSuperior=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(24),gx.O.A150CentroCustoSuperior,0)},c2v:function(){gx.O.A150CentroCustoSuperior=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOSUPERIOR",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:24,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTOFINAL",gxz:"Z151CentroCustoFinal",gxold:"O151CentroCustoFinal",gxvar:"A151CentroCustoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A151CentroCustoFinal=Value},v2z:function(Value){gx.O.Z151CentroCustoFinal=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOFINAL",row || gx.fn.currentGridRowImpl(24),gx.O.A151CentroCustoFinal,0)},c2v:function(){gx.O.A151CentroCustoFinal=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOFINAL",row || gx.fn.currentGridRowImpl(24))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:24,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTONIVEL",gxz:"Z152CentroCustoNivel",gxold:"O152CentroCustoNivel",gxvar:"A152CentroCustoNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A152CentroCustoNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z152CentroCustoNivel=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTONIVEL",row || gx.fn.currentGridRowImpl(24),gx.O.A152CentroCustoNivel,0)},c2v:function(){gx.O.A152CentroCustoNivel=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CENTROCUSTONIVEL",row || gx.fn.currentGridRowImpl(24),'.')},nac:gx.falseFn};
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.Z153EmpresaCentroCustoEmpresaId = "" ;
   this.O153EmpresaCentroCustoEmpresaId = "" ;
   this.AV5cCentroCustoId = "" ;
   this.ZV5cCentroCustoId = "" ;
   this.OV5cCentroCustoId = "" ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.Z150CentroCustoSuperior = "" ;
   this.O150CentroCustoSuperior = "" ;
   this.Z151CentroCustoFinal = "" ;
   this.O151CentroCustoFinal = "" ;
   this.Z152CentroCustoNivel = 0 ;
   this.O152CentroCustoNivel = 0 ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.AV5cCentroCustoId = "" ;
   this.AV6pCentroCustoId = "" ;
   this.A51CentroCustoId = "" ;
   this.A150CentroCustoSuperior = "" ;
   this.A151CentroCustoFinal = "" ;
   this.A152CentroCustoNivel = 0 ;
   this.Events = {"e15292_client": ["ENTER", true] ,"e11292_client": ["'GXM_FIRST'", true] ,"e12292_client": ["'GXM_PREVIOUS'", true] ,"e13292_client": ["'GXM_NEXT'", true] ,"e14292_client": ["'GXM_LAST'", true] ,"e17291_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'A51CentroCustoId',fld:'CENTROCUSTOID'}],[{av:'AV6pCentroCustoId',fld:'vPCENTROCUSTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID',hsh:true}],[]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cCentroCustoId',fld:'vCCENTROCUSTOID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV6pCentroCustoId", "vPCENTROCUSTOID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgx0081());
