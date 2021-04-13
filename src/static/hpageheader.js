/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:23.47
*/
gx.evt.autoSkip = false;
gx.define('hpageheader', true, function (CmpContext) {
   this.ServerClass =  "hpageheader" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e26341_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hregistrarliberacao",[0]), []);
      this.refreshOutputs([]);
   };
   this.e12342_client=function()
   {
      this.executeServerEvent("'LOGOFF'", true, null, false, false);
   };
   this.e13342_client=function()
   {
      this.executeServerEvent("'MENSAGEM'", true, null, false, false);
   };
   this.e15342_client=function()
   {
      this.executeServerEvent("'ATALHO1'", true, null, false, false);
   };
   this.e16342_client=function()
   {
      this.executeServerEvent("'ATALHO2'", true, null, false, false);
   };
   this.e17342_client=function()
   {
      this.executeServerEvent("'ATALHO3'", true, null, false, false);
   };
   this.e18342_client=function()
   {
      this.executeServerEvent("'ATALHO4'", true, null, false, false);
   };
   this.e19342_client=function()
   {
      this.executeServerEvent("'ATALHO5'", true, null, false, false);
   };
   this.e20342_client=function()
   {
      this.executeServerEvent("'ATALHO6'", true, null, false, false);
   };
   this.e21342_client=function()
   {
      this.executeServerEvent("'ATALHO7'", true, null, false, false);
   };
   this.e22342_client=function()
   {
      this.executeServerEvent("'ATALHO8'", true, null, false, false);
   };
   this.e23342_client=function()
   {
      this.executeServerEvent("'ATALHO9'", true, null, false, false);
   };
   this.e24342_client=function()
   {
      this.executeServerEvent("'TROCAREMPRESA'", true, null, false, false);
   };
   this.e27342_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e28342_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,16,18,21,24,25,27,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,81,83,86,88,90,92,94,96,98,99];
   this.GXLastCtrlId =99;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"LOGOEMPRESA",grid:0};
   GXValidFnc[10]={fld:"TABLE7",grid:0};
   GXValidFnc[13]={fld:"NOMEEMPRESA", format:0,grid:0};
   GXValidFnc[16]={fld:"NOMETELA", format:0,grid:0};
   GXValidFnc[18]={fld:"LOGOSISTEMA",grid:0};
   GXValidFnc[21]={fld:"TABLELOGON",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={fld:"USRNOME", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE1",grid:0};
   GXValidFnc[30]={fld:"TABATALHO1",grid:0};
   GXValidFnc[33]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO1",gxz:"ZV13atalho1",gxold:"OV13atalho1",gxvar:"AV13atalho1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13atalho1=Value},v2z:function(Value){gx.O.ZV13atalho1=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO1",gx.O.AV13atalho1,gx.O.AV67Atalho1_GXI)},c2v:function(){gx.O.AV67Atalho1_GXI=this.val_GXI();gx.O.AV13atalho1=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO1")},val_GXI:function(){return gx.fn.getControlValue("vATALHO1_GXI")}, gxvar_GXI:'AV67Atalho1_GXI',nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABATALHO2",grid:0};
   GXValidFnc[38]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO2",gxz:"ZV14atalho2",gxold:"OV14atalho2",gxvar:"AV14atalho2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14atalho2=Value},v2z:function(Value){gx.O.ZV14atalho2=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO2",gx.O.AV14atalho2,gx.O.AV68Atalho2_GXI)},c2v:function(){gx.O.AV68Atalho2_GXI=this.val_GXI();gx.O.AV14atalho2=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO2")},val_GXI:function(){return gx.fn.getControlValue("vATALHO2_GXI")}, gxvar_GXI:'AV68Atalho2_GXI',nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABATALHO3",grid:0};
   GXValidFnc[43]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO3",gxz:"ZV15atalho3",gxold:"OV15atalho3",gxvar:"AV15atalho3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15atalho3=Value},v2z:function(Value){gx.O.ZV15atalho3=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO3",gx.O.AV15atalho3,gx.O.AV69Atalho3_GXI)},c2v:function(){gx.O.AV69Atalho3_GXI=this.val_GXI();gx.O.AV15atalho3=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO3")},val_GXI:function(){return gx.fn.getControlValue("vATALHO3_GXI")}, gxvar_GXI:'AV69Atalho3_GXI',nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABATALHO4",grid:0};
   GXValidFnc[48]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO4",gxz:"ZV16atalho4",gxold:"OV16atalho4",gxvar:"AV16atalho4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16atalho4=Value},v2z:function(Value){gx.O.ZV16atalho4=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO4",gx.O.AV16atalho4,gx.O.AV70Atalho4_GXI)},c2v:function(){gx.O.AV70Atalho4_GXI=this.val_GXI();gx.O.AV16atalho4=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO4")},val_GXI:function(){return gx.fn.getControlValue("vATALHO4_GXI")}, gxvar_GXI:'AV70Atalho4_GXI',nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABATALHO5",grid:0};
   GXValidFnc[53]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO5",gxz:"ZV17atalho5",gxold:"OV17atalho5",gxvar:"AV17atalho5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17atalho5=Value},v2z:function(Value){gx.O.ZV17atalho5=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO5",gx.O.AV17atalho5,gx.O.AV71Atalho5_GXI)},c2v:function(){gx.O.AV71Atalho5_GXI=this.val_GXI();gx.O.AV17atalho5=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO5")},val_GXI:function(){return gx.fn.getControlValue("vATALHO5_GXI")}, gxvar_GXI:'AV71Atalho5_GXI',nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABATALHO6",grid:0};
   GXValidFnc[58]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO6",gxz:"ZV18atalho6",gxold:"OV18atalho6",gxvar:"AV18atalho6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18atalho6=Value},v2z:function(Value){gx.O.ZV18atalho6=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO6",gx.O.AV18atalho6,gx.O.AV72Atalho6_GXI)},c2v:function(){gx.O.AV72Atalho6_GXI=this.val_GXI();gx.O.AV18atalho6=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO6")},val_GXI:function(){return gx.fn.getControlValue("vATALHO6_GXI")}, gxvar_GXI:'AV72Atalho6_GXI',nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABATALHO7",grid:0};
   GXValidFnc[63]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO7",gxz:"ZV19atalho7",gxold:"OV19atalho7",gxvar:"AV19atalho7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19atalho7=Value},v2z:function(Value){gx.O.ZV19atalho7=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO7",gx.O.AV19atalho7,gx.O.AV73Atalho7_GXI)},c2v:function(){gx.O.AV73Atalho7_GXI=this.val_GXI();gx.O.AV19atalho7=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO7")},val_GXI:function(){return gx.fn.getControlValue("vATALHO7_GXI")}, gxvar_GXI:'AV73Atalho7_GXI',nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABATALHO8",grid:0};
   GXValidFnc[68]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO8",gxz:"ZV20atalho8",gxold:"OV20atalho8",gxvar:"AV20atalho8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20atalho8=Value},v2z:function(Value){gx.O.ZV20atalho8=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO8",gx.O.AV20atalho8,gx.O.AV74Atalho8_GXI)},c2v:function(){gx.O.AV74Atalho8_GXI=this.val_GXI();gx.O.AV20atalho8=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO8")},val_GXI:function(){return gx.fn.getControlValue("vATALHO8_GXI")}, gxvar_GXI:'AV74Atalho8_GXI',nac:gx.falseFn};
   GXValidFnc[70]={fld:"TABATALHO9",grid:0};
   GXValidFnc[73]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vATALHO9",gxz:"ZV21atalho9",gxold:"OV21atalho9",gxvar:"AV21atalho9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21atalho9=Value},v2z:function(Value){gx.O.ZV21atalho9=Value},v2c:function(){gx.fn.setMultimediaValue("vATALHO9",gx.O.AV21atalho9,gx.O.AV75Atalho9_GXI)},c2v:function(){gx.O.AV75Atalho9_GXI=this.val_GXI();gx.O.AV21atalho9=this.val()},val:function(){return gx.fn.getBlobValue("vATALHO9")},val_GXI:function(){return gx.fn.getControlValue("vATALHO9_GXI")}, gxvar_GXI:'AV75Atalho9_GXI',nac:gx.falseFn};
   GXValidFnc[75]={fld:"TABLE8",grid:0};
   GXValidFnc[78]={fld:"TABLEPER",grid:0};
   GXValidFnc[81]={fld:"IMGPER",grid:0};
   GXValidFnc[83]={fld:"TABLEMSG",grid:0};
   GXValidFnc[86]={fld:"IMGMSG",grid:0};
   GXValidFnc[88]={fld:"IMGFAQ",grid:0};
   GXValidFnc[90]={fld:"IMGSQL",grid:0};
   GXValidFnc[92]={fld:"IMGPRINT",grid:0};
   GXValidFnc[94]={fld:"IMGEMPRESA",grid:0};
   GXValidFnc[96]={fld:"IMGHOME",grid:0};
   GXValidFnc[98]={fld:"IMGLOGOFF",grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDESCPROCEDURE",gxz:"ZV58DescProcedure",gxold:"OV58DescProcedure",gxvar:"AV58DescProcedure",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58DescProcedure=Value},v2z:function(Value){gx.O.ZV58DescProcedure=Value},v2c:function(){gx.fn.setControlValue("vDESCPROCEDURE",gx.O.AV58DescProcedure,0)},c2v:function(){gx.O.AV58DescProcedure=this.val()},val:function(){return gx.fn.getControlValue("vDESCPROCEDURE")},nac:gx.falseFn};
   this.AV67Atalho1_GXI = "" ;
   this.AV13atalho1 = "" ;
   this.ZV13atalho1 = "" ;
   this.OV13atalho1 = "" ;
   this.AV68Atalho2_GXI = "" ;
   this.AV14atalho2 = "" ;
   this.ZV14atalho2 = "" ;
   this.OV14atalho2 = "" ;
   this.AV69Atalho3_GXI = "" ;
   this.AV15atalho3 = "" ;
   this.ZV15atalho3 = "" ;
   this.OV15atalho3 = "" ;
   this.AV70Atalho4_GXI = "" ;
   this.AV16atalho4 = "" ;
   this.ZV16atalho4 = "" ;
   this.OV16atalho4 = "" ;
   this.AV71Atalho5_GXI = "" ;
   this.AV17atalho5 = "" ;
   this.ZV17atalho5 = "" ;
   this.OV17atalho5 = "" ;
   this.AV72Atalho6_GXI = "" ;
   this.AV18atalho6 = "" ;
   this.ZV18atalho6 = "" ;
   this.OV18atalho6 = "" ;
   this.AV73Atalho7_GXI = "" ;
   this.AV19atalho7 = "" ;
   this.ZV19atalho7 = "" ;
   this.OV19atalho7 = "" ;
   this.AV74Atalho8_GXI = "" ;
   this.AV20atalho8 = "" ;
   this.ZV20atalho8 = "" ;
   this.OV20atalho8 = "" ;
   this.AV75Atalho9_GXI = "" ;
   this.AV21atalho9 = "" ;
   this.ZV21atalho9 = "" ;
   this.OV21atalho9 = "" ;
   this.AV58DescProcedure = "" ;
   this.ZV58DescProcedure = "" ;
   this.OV58DescProcedure = "" ;
   this.AV13atalho1 = "" ;
   this.AV14atalho2 = "" ;
   this.AV15atalho3 = "" ;
   this.AV16atalho4 = "" ;
   this.AV17atalho5 = "" ;
   this.AV18atalho6 = "" ;
   this.AV19atalho7 = "" ;
   this.AV20atalho8 = "" ;
   this.AV21atalho9 = "" ;
   this.AV58DescProcedure = "" ;
   this.AV29SnHabilitado = "" ;
   this.AV30NomeEmpresa = "" ;
   this.AV33NomeTela = "" ;
   this.A216EmpresaUsuarioUsuarioId = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A138EmpresaId = "" ;
   this.A143AtalhoSistemaOrdem = 0 ;
   this.A145ProgramaNome = "" ;
   this.A8937ProgramaSnCalculaCustoMedio = "" ;
   this.A498ProgramaLink = "" ;
   this.A142AtalhoSistemaNoIcone = 0 ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A9862ScriptSqlStatus = 0 ;
   this.Events = {"e12342_client": ["'LOGOFF'", true] ,"e13342_client": ["'MENSAGEM'", true] ,"e15342_client": ["'ATALHO1'", true] ,"e16342_client": ["'ATALHO2'", true] ,"e17342_client": ["'ATALHO3'", true] ,"e18342_client": ["'ATALHO4'", true] ,"e19342_client": ["'ATALHO5'", true] ,"e20342_client": ["'ATALHO6'", true] ,"e21342_client": ["'ATALHO7'", true] ,"e22342_client": ["'ATALHO8'", true] ,"e23342_client": ["'ATALHO9'", true] ,"e24342_client": ["'TROCAREMPRESA'", true] ,"e27342_client": ["ENTER", true] ,"e28342_client": ["CANCEL", true] ,"e26341_client": ["'LIBERARPERMISSAO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'AV29SnHabilitado',fld:'vSNHABILITADO',hsh:true},{av:'A143AtalhoSistemaOrdem',fld:'ATALHOSISTEMAORDEM'},{av:'A142AtalhoSistemaNoIcone',fld:'ATALHOSISTEMANOICONE'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'A498ProgramaLink',fld:'PROGRAMALINK'},{av:'A145ProgramaNome',fld:'PROGRAMANOME'},{av:'A8937ProgramaSnCalculaCustoMedio',fld:'PROGRAMASNCALCULACUSTOMEDIO'},{av:'AV44linkAtalho',fld:'vLINKATALHO'}],[{av:'gx.fn.getCtrlProperty("IMGMSG","Visible")',ctrl:'IMGMSG',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGFAQ","Visible")',ctrl:'IMGFAQ',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGPRINT","Visible")',ctrl:'IMGPRINT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGHOME","Visible")',ctrl:'IMGHOME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGLOGOFF","Visible")',ctrl:'IMGLOGOFF',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGPER","Visible")',ctrl:'IMGPER',prop:'Visible'},{av:'gx.fn.getCtrlProperty("IMGEMPRESA","Visible")',ctrl:'IMGEMPRESA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO1","Visible")',ctrl:'vATALHO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO2","Visible")',ctrl:'vATALHO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO3","Visible")',ctrl:'vATALHO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO4","Visible")',ctrl:'vATALHO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO5","Visible")',ctrl:'vATALHO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO6","Visible")',ctrl:'vATALHO6',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO7","Visible")',ctrl:'vATALHO7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO8","Visible")',ctrl:'vATALHO8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vATALHO9","Visible")',ctrl:'vATALHO9',prop:'Visible'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'gx.fn.getCtrlProperty("TABATALHO1","Visible")',ctrl:'TABATALHO1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO2","Visible")',ctrl:'TABATALHO2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO3","Visible")',ctrl:'TABATALHO3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO4","Visible")',ctrl:'TABATALHO4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO5","Visible")',ctrl:'TABATALHO5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO6","Visible")',ctrl:'TABATALHO6',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO7","Visible")',ctrl:'TABATALHO7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO8","Visible")',ctrl:'TABATALHO8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABATALHO9","Visible")',ctrl:'TABATALHO9',prop:'Visible'},{av:'AV49Count',fld:'vCOUNT'},{av:'AV23SistemaId',fld:'vSISTEMAID'},{av:'AV24ProgramaId',fld:'vPROGRAMAID'},{av:'AV25ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV26ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV41ProgramaSnCalculaCustoMedio',fld:'vPROGRAMASNCALCULACUSTOMEDIO'},{av:'AV22Nome',fld:'vNOME'},{av:'AV21atalho9',fld:'vATALHO9'},{av:'gx.fn.getCtrlProperty("vATALHO9","Tooltiptext")',ctrl:'vATALHO9',prop:'Tooltiptext'},{ctrl:'vATALHO9',prop:'Alternatetext'},{av:'AV20atalho8',fld:'vATALHO8'},{av:'gx.fn.getCtrlProperty("vATALHO8","Tooltiptext")',ctrl:'vATALHO8',prop:'Tooltiptext'},{ctrl:'vATALHO8',prop:'Alternatetext'},{av:'AV19atalho7',fld:'vATALHO7'},{av:'gx.fn.getCtrlProperty("vATALHO7","Tooltiptext")',ctrl:'vATALHO7',prop:'Tooltiptext'},{ctrl:'vATALHO7',prop:'Alternatetext'},{av:'AV18atalho6',fld:'vATALHO6'},{av:'gx.fn.getCtrlProperty("vATALHO6","Tooltiptext")',ctrl:'vATALHO6',prop:'Tooltiptext'},{ctrl:'vATALHO6',prop:'Alternatetext'},{av:'AV17atalho5',fld:'vATALHO5'},{av:'gx.fn.getCtrlProperty("vATALHO5","Tooltiptext")',ctrl:'vATALHO5',prop:'Tooltiptext'},{ctrl:'vATALHO5',prop:'Alternatetext'},{av:'AV16atalho4',fld:'vATALHO4'},{av:'gx.fn.getCtrlProperty("vATALHO4","Tooltiptext")',ctrl:'vATALHO4',prop:'Tooltiptext'},{ctrl:'vATALHO4',prop:'Alternatetext'},{av:'AV15atalho3',fld:'vATALHO3'},{av:'gx.fn.getCtrlProperty("vATALHO3","Tooltiptext")',ctrl:'vATALHO3',prop:'Tooltiptext'},{ctrl:'vATALHO3',prop:'Alternatetext'},{av:'AV14atalho2',fld:'vATALHO2'},{av:'gx.fn.getCtrlProperty("vATALHO2","Tooltiptext")',ctrl:'vATALHO2',prop:'Tooltiptext'},{ctrl:'vATALHO2',prop:'Alternatetext'},{av:'AV13atalho1',fld:'vATALHO1'},{av:'gx.fn.getCtrlProperty("vATALHO1","Tooltiptext")',ctrl:'vATALHO1',prop:'Tooltiptext'},{ctrl:'vATALHO1',prop:'Alternatetext'}]];
   this.EvtParms["'LOGOFF'"] = [[],[]];
   this.EvtParms["'MENSAGEM'"] = [[],[{av:'AV12UsuarioId',fld:'vUSUARIOID'}]];
   this.EvtParms["'LIBERARPERMISSAO'"] = [[],[]];
   this.EvtParms["'ATALHO1'"] = [[{ctrl:'vATALHO1',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO2'"] = [[{ctrl:'vATALHO2',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO3'"] = [[{ctrl:'vATALHO3',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO4'"] = [[{ctrl:'vATALHO4',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO5'"] = [[{ctrl:'vATALHO5',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO6'"] = [[{ctrl:'vATALHO6',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO7'"] = [[{ctrl:'vATALHO7',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO8'"] = [[{ctrl:'vATALHO8',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'ATALHO9'"] = [[{ctrl:'vATALHO9',prop:'Alternatetext'},{av:'AV42link',fld:'vLINK'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV76Pgmname',fld:'vPGMNAME'}],[{av:'AV42link',fld:'vLINK'},{av:'AV43Split',fld:'vSPLIT'},{av:'AV44linkAtalho',fld:'vLINKATALHO'},{av:'AV59DataFechamento',fld:'vDATAFECHAMENTO'},{av:'AV76Pgmname',fld:'vPGMNAME'}]];
   this.EvtParms["'TROCAREMPRESA'"] = [[{av:'A191EmpresaFantasia',fld:'EMPRESAFANTASIA'},{av:'A216EmpresaUsuarioUsuarioId',fld:'EMPRESAUSUARIOUSUARIOID'}],[{av:'AV12UsuarioId',fld:'vUSUARIOID'},{av:'AV46ContEmp',fld:'vCONTEMP'}]];
   this.InitStandaloneVars( );
});
