/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:48.60
*/
gx.evt.autoSkip = false;
gx.define('gx0ha0', false, function () {
   this.ServerClass =  "gx0ha0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV10pPisCofinsAuxTipo=gx.fn.getIntegerValue("vPPISCOFINSAUXTIPO",'.') ;
      this.AV11pPisCofinsAuxCST=gx.fn.getControlValue("vPPISCOFINSAUXCST") ;
      this.AV12pPisCofinsAuxNatureza=gx.fn.getIntegerValue("vPPISCOFINSAUXNATUREZA",'.') ;
   };
   this.e131va2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141va1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ha0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8443,43,"PISCOFINSAUXTIPO","Pis Cofins Aux Tipo","","PisCofinsAuxTipo","int",0,"px",1,1,"right",null,[],8443,"PisCofinsAuxTipo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8444,44,"PISCOFINSAUXCST","Pis Cofins Aux CST","","PisCofinsAuxCST","char",0,"px",3,3,"left",null,[],8444,"PisCofinsAuxCST",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8445,45,"PISCOFINSAUXNATUREZA","Pis Cofins Aux Natureza","","PisCofinsAuxNatureza","int",0,"px",3,3,"right",null,[],8445,"PisCofinsAuxNatureza",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8442,46,"PISCOFINSAUXVALORRECEITA","Pis Cofins Aux Valor Receita","Selecionar","PisCofinsAuxValorReceita","decimal",0,"px",22,22,"right",null,[],8442,"PisCofinsAuxValorReceita",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10361,47,"PISCOFINSAUXCONTAB","Aux Contab","","PisCofinsAuxContab","svchar",0,"px",30,30,"left",null,[],10361,"PisCofinsAuxContab",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPISCOFINSAUXTIPO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPISCOFINSAUXTIPO",gxz:"ZV6cPisCofinsAuxTipo",gxold:"OV6cPisCofinsAuxTipo",gxvar:"AV6cPisCofinsAuxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPisCofinsAuxTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPisCofinsAuxTipo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPISCOFINSAUXTIPO",gx.O.AV6cPisCofinsAuxTipo,0)},c2v:function(){gx.O.AV6cPisCofinsAuxTipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPISCOFINSAUXTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPISCOFINSAUXCST", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPISCOFINSAUXCST",gxz:"ZV7cPisCofinsAuxCST",gxold:"OV7cPisCofinsAuxCST",gxvar:"AV7cPisCofinsAuxCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPisCofinsAuxCST=Value},v2z:function(Value){gx.O.ZV7cPisCofinsAuxCST=Value},v2c:function(){gx.fn.setControlValue("vCPISCOFINSAUXCST",gx.O.AV7cPisCofinsAuxCST,0)},c2v:function(){gx.O.AV7cPisCofinsAuxCST=this.val()},val:function(){return gx.fn.getControlValue("vCPISCOFINSAUXCST")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPISCOFINSAUXNATUREZA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPISCOFINSAUXNATUREZA",gxz:"ZV8cPisCofinsAuxNatureza",gxold:"OV8cPisCofinsAuxNatureza",gxvar:"AV8cPisCofinsAuxNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPisCofinsAuxNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cPisCofinsAuxNatureza=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPISCOFINSAUXNATUREZA",gx.O.AV8cPisCofinsAuxNatureza,0)},c2v:function(){gx.O.AV8cPisCofinsAuxNatureza=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPISCOFINSAUXNATUREZA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPISCOFINSAUXVALORRECEITA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPISCOFINSAUXVALORRECEITA",gxz:"ZV9cPisCofinsAuxValorReceita",gxold:"OV9cPisCofinsAuxValorReceita",gxvar:"AV9cPisCofinsAuxValorReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPisCofinsAuxValorReceita=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV9cPisCofinsAuxValorReceita=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCPISCOFINSAUXVALORRECEITA",gx.O.AV9cPisCofinsAuxValorReceita,2,',')},c2v:function(){gx.O.AV9cPisCofinsAuxValorReceita=this.val()},val:function(){return gx.fn.getDecimalValue("vCPISCOFINSAUXVALORRECEITA",'.',',')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPISCOFINSAUXCONTAB", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPISCOFINSAUXCONTAB",gxz:"ZV13cPisCofinsAuxContab",gxold:"OV13cPisCofinsAuxContab",gxvar:"AV13cPisCofinsAuxContab",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13cPisCofinsAuxContab=Value},v2z:function(Value){gx.O.ZV13cPisCofinsAuxContab=Value},v2c:function(){gx.fn.setControlValue("vCPISCOFINSAUXCONTAB",gx.O.AV13cPisCofinsAuxContab,0)},c2v:function(){gx.O.AV13cPisCofinsAuxContab=this.val()},val:function(){return gx.fn.getControlValue("vCPISCOFINSAUXCONTAB")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PISCOFINSAUXTIPO",gxz:"Z8443PisCofinsAuxTipo",gxold:"O8443PisCofinsAuxTipo",gxvar:"A8443PisCofinsAuxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8443PisCofinsAuxTipo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8443PisCofinsAuxTipo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PISCOFINSAUXTIPO",row || gx.fn.currentGridRowImpl(41),gx.O.A8443PisCofinsAuxTipo,0)},c2v:function(){gx.O.A8443PisCofinsAuxTipo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PISCOFINSAUXTIPO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PISCOFINSAUXCST",gxz:"Z8444PisCofinsAuxCST",gxold:"O8444PisCofinsAuxCST",gxvar:"A8444PisCofinsAuxCST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8444PisCofinsAuxCST=Value},v2z:function(Value){gx.O.Z8444PisCofinsAuxCST=Value},v2c:function(row){gx.fn.setGridControlValue("PISCOFINSAUXCST",row || gx.fn.currentGridRowImpl(41),gx.O.A8444PisCofinsAuxCST,0)},c2v:function(){gx.O.A8444PisCofinsAuxCST=this.val()},val:function(row){return gx.fn.getGridControlValue("PISCOFINSAUXCST",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PISCOFINSAUXNATUREZA",gxz:"Z8445PisCofinsAuxNatureza",gxold:"O8445PisCofinsAuxNatureza",gxvar:"A8445PisCofinsAuxNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8445PisCofinsAuxNatureza=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8445PisCofinsAuxNatureza=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PISCOFINSAUXNATUREZA",row || gx.fn.currentGridRowImpl(41),gx.O.A8445PisCofinsAuxNatureza,0)},c2v:function(){gx.O.A8445PisCofinsAuxNatureza=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PISCOFINSAUXNATUREZA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PISCOFINSAUXVALORRECEITA",gxz:"Z8442PisCofinsAuxValorReceita",gxold:"O8442PisCofinsAuxValorReceita",gxvar:"A8442PisCofinsAuxValorReceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8442PisCofinsAuxValorReceita=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8442PisCofinsAuxValorReceita=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PISCOFINSAUXVALORRECEITA",row || gx.fn.currentGridRowImpl(41),gx.O.A8442PisCofinsAuxValorReceita,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8442PisCofinsAuxValorReceita=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PISCOFINSAUXVALORRECEITA",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PISCOFINSAUXCONTAB",gxz:"Z10361PisCofinsAuxContab",gxold:"O10361PisCofinsAuxContab",gxvar:"A10361PisCofinsAuxContab",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10361PisCofinsAuxContab=Value},v2z:function(Value){gx.O.Z10361PisCofinsAuxContab=Value},v2c:function(row){gx.fn.setGridControlValue("PISCOFINSAUXCONTAB",row || gx.fn.currentGridRowImpl(41),gx.O.A10361PisCofinsAuxContab,0)},c2v:function(){gx.O.A10361PisCofinsAuxContab=this.val()},val:function(row){return gx.fn.getGridControlValue("PISCOFINSAUXCONTAB",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cPisCofinsAuxTipo = 0 ;
   this.ZV6cPisCofinsAuxTipo = 0 ;
   this.OV6cPisCofinsAuxTipo = 0 ;
   this.AV7cPisCofinsAuxCST = "" ;
   this.ZV7cPisCofinsAuxCST = "" ;
   this.OV7cPisCofinsAuxCST = "" ;
   this.AV8cPisCofinsAuxNatureza = 0 ;
   this.ZV8cPisCofinsAuxNatureza = 0 ;
   this.OV8cPisCofinsAuxNatureza = 0 ;
   this.AV9cPisCofinsAuxValorReceita = 0 ;
   this.ZV9cPisCofinsAuxValorReceita = 0 ;
   this.OV9cPisCofinsAuxValorReceita = 0 ;
   this.AV13cPisCofinsAuxContab = "" ;
   this.ZV13cPisCofinsAuxContab = "" ;
   this.OV13cPisCofinsAuxContab = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8443PisCofinsAuxTipo = 0 ;
   this.O8443PisCofinsAuxTipo = 0 ;
   this.Z8444PisCofinsAuxCST = "" ;
   this.O8444PisCofinsAuxCST = "" ;
   this.Z8445PisCofinsAuxNatureza = 0 ;
   this.O8445PisCofinsAuxNatureza = 0 ;
   this.Z8442PisCofinsAuxValorReceita = 0 ;
   this.O8442PisCofinsAuxValorReceita = 0 ;
   this.Z10361PisCofinsAuxContab = "" ;
   this.O10361PisCofinsAuxContab = "" ;
   this.AV6cPisCofinsAuxTipo = 0 ;
   this.AV7cPisCofinsAuxCST = "" ;
   this.AV8cPisCofinsAuxNatureza = 0 ;
   this.AV9cPisCofinsAuxValorReceita = 0 ;
   this.AV13cPisCofinsAuxContab = "" ;
   this.AV10pPisCofinsAuxTipo = 0 ;
   this.AV11pPisCofinsAuxCST = "" ;
   this.AV12pPisCofinsAuxNatureza = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8443PisCofinsAuxTipo = 0 ;
   this.A8444PisCofinsAuxCST = "" ;
   this.A8445PisCofinsAuxNatureza = 0 ;
   this.A8442PisCofinsAuxValorReceita = 0 ;
   this.A10361PisCofinsAuxContab = "" ;
   this.Events = {"e131va2_client": ["ENTER", true] ,"e141va1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPisCofinsAuxTipo',fld:'vCPISCOFINSAUXTIPO'},{av:'AV7cPisCofinsAuxCST',fld:'vCPISCOFINSAUXCST'},{av:'AV8cPisCofinsAuxNatureza',fld:'vCPISCOFINSAUXNATUREZA'},{av:'AV9cPisCofinsAuxValorReceita',fld:'vCPISCOFINSAUXVALORRECEITA'},{av:'AV13cPisCofinsAuxContab',fld:'vCPISCOFINSAUXCONTAB'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8443PisCofinsAuxTipo',fld:'PISCOFINSAUXTIPO'},{av:'A8444PisCofinsAuxCST',fld:'PISCOFINSAUXCST'},{av:'A8445PisCofinsAuxNatureza',fld:'PISCOFINSAUXNATUREZA'}],[{av:'AV10pPisCofinsAuxTipo',fld:'vPPISCOFINSAUXTIPO'},{av:'AV11pPisCofinsAuxCST',fld:'vPPISCOFINSAUXCST'},{av:'AV12pPisCofinsAuxNatureza',fld:'vPPISCOFINSAUXNATUREZA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPisCofinsAuxTipo',fld:'vCPISCOFINSAUXTIPO'},{av:'AV7cPisCofinsAuxCST',fld:'vCPISCOFINSAUXCST'},{av:'AV8cPisCofinsAuxNatureza',fld:'vCPISCOFINSAUXNATUREZA'},{av:'AV9cPisCofinsAuxValorReceita',fld:'vCPISCOFINSAUXVALORRECEITA'},{av:'AV13cPisCofinsAuxContab',fld:'vCPISCOFINSAUXCONTAB'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPisCofinsAuxTipo',fld:'vCPISCOFINSAUXTIPO'},{av:'AV7cPisCofinsAuxCST',fld:'vCPISCOFINSAUXCST'},{av:'AV8cPisCofinsAuxNatureza',fld:'vCPISCOFINSAUXNATUREZA'},{av:'AV9cPisCofinsAuxValorReceita',fld:'vCPISCOFINSAUXVALORRECEITA'},{av:'AV13cPisCofinsAuxContab',fld:'vCPISCOFINSAUXCONTAB'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPisCofinsAuxTipo',fld:'vCPISCOFINSAUXTIPO'},{av:'AV7cPisCofinsAuxCST',fld:'vCPISCOFINSAUXCST'},{av:'AV8cPisCofinsAuxNatureza',fld:'vCPISCOFINSAUXNATUREZA'},{av:'AV9cPisCofinsAuxValorReceita',fld:'vCPISCOFINSAUXVALORRECEITA'},{av:'AV13cPisCofinsAuxContab',fld:'vCPISCOFINSAUXCONTAB'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPisCofinsAuxTipo',fld:'vCPISCOFINSAUXTIPO'},{av:'AV7cPisCofinsAuxCST',fld:'vCPISCOFINSAUXCST'},{av:'AV8cPisCofinsAuxNatureza',fld:'vCPISCOFINSAUXNATUREZA'},{av:'AV9cPisCofinsAuxValorReceita',fld:'vCPISCOFINSAUXVALORRECEITA'},{av:'AV13cPisCofinsAuxContab',fld:'vCPISCOFINSAUXCONTAB'}],[]];
   this.setVCMap("AV10pPisCofinsAuxTipo", "vPPISCOFINSAUXTIPO", 0, "int");
   this.setVCMap("AV11pPisCofinsAuxCST", "vPPISCOFINSAUXCST", 0, "char");
   this.setVCMap("AV12pPisCofinsAuxNatureza", "vPPISCOFINSAUXNATUREZA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ha0());